import React from 'react';
import { DimensionValue, Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme/Colors.ts';
import { ms } from 'react-native-size-matters';

type Props = {
  imageUrl: string;
  brandIconColor: string;
  brandIconUrl: string;
  remainingText: string;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  imageBorderRadius?: number;
};

const styles = StyleSheet.create({
  brandIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: ms(84),
    height: ms(84),
    borderRadius: 99,
  },
  brandIcon: {
    resizeMode: 'contain',
    width: '96%',
    height: '96%',
  },
  remainingText: {
    color: Colors.white,
    paddingHorizontal: ms(8),
  },
  remainingBadge: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: ms(9),
    right: ms(6),
    backgroundColor: Colors.black,
    height: ms(32),
    borderRadius: 12,
  },
});

const borderBottomLeftRadius = 120;
const ImageWithBrandIcon = ({
  imageUrl,
  brandIconColor,
  brandIconUrl,
  remainingText,
  width = '100%',
  height = 300,
  imageBorderRadius = 0,
}: Props) => {
  return (
    <View style={{ width: '100%' }}>
      <Image
        source={{ uri: imageUrl }}
        style={{
          borderBottomLeftRadius,
          borderRadius: imageBorderRadius,
          width,
          height,
        }}
      />
      <View
        style={[
          styles.brandIconContainer,
          {
            backgroundColor: brandIconColor,
          },
        ]}
      >
        <Image source={{ uri: brandIconUrl }} style={styles.brandIcon} />
      </View>
      <View style={styles.remainingBadge}>
        <Text style={styles.remainingText}>{remainingText}</Text>
      </View>
    </View>
  );
};

export default ImageWithBrandIcon;
