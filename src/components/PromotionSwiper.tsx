import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import HTMLView from 'react-native-htmlview';
import Dots from 'react-native-dots-pagination';
import { Colors } from '../theme/Colors.ts';
import { useNavigation } from '@react-navigation/native';
import ImageWithBrandIcon from './ImageWithBrandIcon.tsx';
import {
  descriptionTagStyle,
  horizontal,
  participationTagStyle,
  titleTagStyle,
  vertical,
} from '../Contants.ts';
import { ms } from 'react-native-size-matters';

export type PromotionItem = {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  CardType: 'Default';
  ExternalUrl: string;
  Id: number;
  ImageUrl: string;
  IsLuckyDay: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  LuckyDayBackgroundColor: string | null;
  LuckyDayText: string;
  LuckyDayTextColor: string | null;
  PromotionCardColor: string;
  RemainingText: string;
  ScenarioType: string;
  SeoName: string;
  Title: string;
  Unavailable: boolean;
};

type Props = {
  data: Array<PromotionItem>;
};

const styles = StyleSheet.create({
  swiperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiper: {
    marginBottom: 30,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: ms(420),
    borderWidth: 1.6,
    borderColor: Colors.shadow,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 4,
  },
  swiperBottomView: {
    zIndex: -1,
    position: 'absolute',
    bottom: ms(12),
    transform: [{ rotate: '4deg' }],
    width: '90%',
    height: ms(40),
    borderRadius: 10,
  },
});
const width = Dimensions.get('screen').width;
const PromotionSwiper = ({ data }: Props) => {
  const navigation = useNavigation();
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    setPageNumber(0);
  }, [data.length]);

  const onScrollEnd = (e: any) => {
    const pageNum = Math.min(
      Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.5), 0),
      data.length,
    );
    setPageNumber(pageNum);
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        // @ts-ignore
        onPress={() => navigation.navigate('PromotionDetail', { id: item.Id })}
      >
        <View style={[styles.swiperContainer, { width }]}>
          <View style={styles.swiper}>
            <ImageWithBrandIcon
              imageUrl={item.ImageUrl}
              brandIconColor={item.BrandIconColor}
              brandIconUrl={item.BrandIconUrl}
              remainingText={item.RemainingText}
              imageBorderRadius={12}
            />
            <HTMLView
              value={item.Title}
              stylesheet={{
                p: titleTagStyle,
              }}
            />
            <HTMLView
              value={item.BrandPromotionCardParticipationText}
              stylesheet={{
                p: {
                  ...participationTagStyle,
                  color: item.PromotionCardColor,
                },
              }}
            />
          </View>
          <View style={[{ backgroundColor: item.PromotionCardColor }, styles.swiperBottomView]} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginTop: 10,
        alignSelf: 'center',
        width,
      }}
    >
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={renderItem}
      />
      {data.length > 1 && (
        <Dots
          length={data.length}
          passiveColor={Colors.gray}
          activeColor={data[pageNumber].PromotionCardColor}
          active={pageNumber}
        />
      )}
    </View>
  );
};
export default PromotionSwiper;
