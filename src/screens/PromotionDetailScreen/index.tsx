import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton.tsx';
import axios from 'axios';
import { BASE_URL, config, descriptionTagStyle, titleTagStyle } from '../../Contants.ts';
// @ts-ignore
import HTMLView from 'react-native-htmlview';
import ImageWithBrandIcon from '../../components/ImageWithBrandIcon.tsx';
import images from '../../assets/images';
import langs from '../../langs';
import { styles } from './styles.ts';

type PromotionDetailType = {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Description: string;
  DetailButtonText: string;
  EndDate: string;
  Id: number;
  Title: string;
  ImageUrl: string;
  RemainingText: string;
  ListButtonText: string;
};

const PromotionDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  const id: number = route?.params?.id || 0;
  const [promotionDetail, setPromotionDetail] = useState<PromotionDetailType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPromotionDetail();
  }, []);

  const getPromotionDetail = () => {
    if (id <= 0) {
      return;
    }
    setLoading(true);
    axios

      .get(`${BASE_URL}/promotions?Id=${id}`, config)
      .then((res) => {
        setPromotionDetail(res.data);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const BackButton = () => (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Image resizeMode={'contain'} source={images.back} style={styles.backImage} />
    </TouchableOpacity>
  );

  return (
    <>
      <BackButton />
      {loading && <ActivityIndicator style={styles.activityIndicator} />}

      {promotionDetail && (
        <>
          <ImageWithBrandIcon
            imageUrl={promotionDetail.ImageUrl}
            brandIconColor={promotionDetail.BrandIconColor}
            brandIconUrl={promotionDetail.BrandIconUrl}
            remainingText={promotionDetail.RemainingText}
          />
          <ScrollView>
            <HTMLView
              value={promotionDetail.Title}
              stylesheet={{
                p: titleTagStyle,
              }}
            />
            {['1', '2', '3', '4', '5', '6'].map((item) => (
              <HTMLView
                key={item}
                value={promotionDetail.Description}
                stylesheet={{
                  p: descriptionTagStyle,
                }}
              />
            ))}
          </ScrollView>
          <View style={styles.bottomOpactiy} />
          <View style={styles.bottomButtonContainer}>
            <CustomButton
              buttonStyle={styles.bottomButton}
              title={langs.promotionDetailScreen.joinNow}
            />
          </View>
        </>
      )}
    </>
  );
};

export default PromotionDetailScreen;
