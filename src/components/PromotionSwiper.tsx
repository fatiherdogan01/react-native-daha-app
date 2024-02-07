import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import HTMLView from 'react-native-htmlview';
import Dots from 'react-native-dots-pagination';
import { Colors } from '../theme/Colors.ts';
import { useNavigation } from '@react-navigation/native';
import ImageWithBrandIcon from './ImageWithBrandIcon.tsx';
import { horizontal, vertical } from '../Contants.ts';
import { ms } from 'react-native-size-matters';

const styles = StyleSheet.create({});
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
          }}
        >
          <View
            style={{
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
            }}
          >
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
                p: {
                  paddingVertical: vertical,
                  paddingHorizontal: horizontal,
                  fontWeight: '700',
                  fontSize: 24,
                },
              }}
            />
            <HTMLView
              value={item.BrandPromotionCardParticipationText}
              stylesheet={{
                p: {
                  paddingBottom: vertical,
                  paddingHorizontal: horizontal,
                  color: item.PromotionCardColor,
                  fontWeight: '700',
                },
              }}
            />
          </View>
          <View
            style={{
              zIndex: -1,
              position: 'absolute',
              bottom: 12,
              transform: [{ rotate: '4deg' }],
              width: '89%',
              height: 40,
              borderRadius: 10,
              backgroundColor: item.PromotionCardColor,
            }}
          />
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
