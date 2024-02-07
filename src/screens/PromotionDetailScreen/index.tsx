import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton.tsx';
import axios from 'axios';
import {
  BASE_URL,
  contants,
  desciptionFontSize,
  horizontal,
  titleFontSize,
  vertical,
} from '../../Contants.ts';
// @ts-ignore
import HTMLView from 'react-native-htmlview';
import ImageWithBrandIcon from '../../components/ImageWithBrandIcon.tsx';
import images from '../../assets/images';
import { Colors } from '../../theme/Colors.ts';
import langs from '../../langs';

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
};

const PromotionDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  const id: number = route?.params?.id || 0;
  const [promotionDetail, setPromotionDetail] = useState<PromotionDetailType>();
  const [loading, setLoading] = useState(false);
  console.log(id);
  useEffect(() => {
    getPromotionDetail();
  }, []);

  console.log(promotionDetail);

  const getPromotionDetail = () => {
    if (id <= 0) {
      return;
    }
    setLoading(true);
    axios

      .get(`${BASE_URL}/promotions?Id=${id}`, contants)
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
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        left: 10,
        backgroundColor: Colors.black,
        width: 40,
        height: 40,
        borderRadius: 99,
      }}
    >
      <Image resizeMode={'contain'} source={images.back} style={{ width: '48%', height: '48%' }} />
    </TouchableOpacity>
  );

  return (
    <>
      <BackButton />
      {loading && <ActivityIndicator />}

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
                p: {
                  fontWeight: '700',
                  fontSize: titleFontSize,
                  paddingVertical: vertical,
                  paddingHorizontal: horizontal,
                },
              }}
            />
            <HTMLView
              value={promotionDetail.Description}
              stylesheet={{
                p: {
                  fontSize: desciptionFontSize,
                  paddingBottom: vertical,
                  paddingHorizontal: horizontal,
                },
              }}
            />
          </ScrollView>
        </>
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
        }}
      >
        <CustomButton buttonStyle={{ width: '80%' }} title={langs.promotionDetailScreen.joinNow} />
      </View>
    </>
  );
};

export default PromotionDetailScreen;
