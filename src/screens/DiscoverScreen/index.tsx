import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import images from '../../assets/images';
import TagsList, { TagItem } from '../../components/TagsList.tsx';
import CustomButton from '../../components/CustomButton.tsx';
import Profile from '../../components/Profile.tsx';
import langs from '../../langs';
import { styles } from './styles.ts';
import axios from 'axios';
import { BASE_URL, config, horizontal } from '../../Contants.ts';
import PromotionSwiper from '../../components/PromotionSwiper.tsx';
import { Colors } from '../../theme/Colors.ts';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Image source={images.daha} style={styles.daha} />
      </View>
      <View style={styles.rightContainer}>
        <CustomButton title={langs.discoverScreen.login} />
        <Profile hasNotification />
      </View>
    </View>
  );
};
const DiscoverScreen = () => {
  const [tags, setTags] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(false);
  const [promotionsLoading, setPromotionsLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState<TagItem>();

  useEffect(() => {
    getTags();
  }, []);

  const getPromotions = (tagId: number) => {
    setPromotionsLoading(true);
    axios
      .get(`${BASE_URL}/promotions/list?Channel=PWA&TagId=${tagId}`, config)
      .then((res) => {
        setPromotions(res.data);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setPromotionsLoading(false);
      });
  };
  const getTags = () => {
    setTagsLoading(true);
    axios
      .get(`${BASE_URL}/tags/list`, config)
      .then((res) => {
        setTags(res.data);
        setSelectedTag(res.data[0]);
        getPromotions(res.data[0].Id);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setTagsLoading(false);
      });
  };

  const setTagItem = (item: TagItem) => {
    setSelectedTag(item);
    getPromotions(item.Id);
  };

  return (
    <View style={{ margin: horizontal }}>
      <Header />
      {tags && !tagsLoading ? (
        <TagsList data={tags} selectedItem={selectedTag} setItem={setTagItem} />
      ) : (
        <ActivityIndicator color={Colors.black} />
      )}
      <View style={styles.promotionContent}>
        {promotions && !promotionsLoading ? (
          <PromotionSwiper data={promotions} />
        ) : (
          <ActivityIndicator color={Colors.black} style={styles.activityIndicator} />
        )}
      </View>
    </View>
  );
};
export default DiscoverScreen;
