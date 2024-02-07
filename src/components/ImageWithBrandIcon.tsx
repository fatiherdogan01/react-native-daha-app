import React from 'react';
import { DimensionValue, Image, Text, View } from 'react-native';
import { Colors } from '../theme/Colors.ts';
import { ms } from 'react-native-size-matters';
import { borderRadius } from '../Contants.ts';

type Props = {
  imageUrl: string;
  brandIconColor: string;
  brandIconUrl: string;
  remainingText: string;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  imageBorderRadius?: number;
};
const ImageWithBrandIcon = ({
  imageUrl,
  brandIconColor,
  brandIconUrl,
  remainingText,
  width = '100%',
  height = 300,
  imageBorderRadius,
}: Props) => {
  return (
    <View style={{ width: '100%' }}>
      <Image
        source={{ uri: imageUrl }}
        style={{
          borderBottomLeftRadius: 120,
          borderRadius: imageBorderRadius || 0,
          width,
          height,
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: brandIconColor,
          width: ms(84),
          height: ms(84),
          borderRadius: 999,
        }}
      >
        <Image
          resizeMode={'contain'}
          source={{ uri: brandIconUrl }}
          style={{ width: '96%', height: '96%' }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: ms(4),
          right: ms(4),
          backgroundColor: Colors.black,
          height: ms(32),
          borderRadius: 12,
        }}
      >
        <Text style={{ color: Colors.white, paddingHorizontal: ms(8) }}>{remainingText}</Text>
      </View>
    </View>
  );
};

export default ImageWithBrandIcon;
