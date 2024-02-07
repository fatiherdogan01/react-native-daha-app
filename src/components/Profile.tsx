import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from '../theme/Colors.ts';
import { ms } from 'react-native-size-matters';
import images from '../assets/images';

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  hasNotification?: boolean;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
};
const styles = StyleSheet.create({
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ms(38),
    width: ms(38),
    borderRadius: 99,
  },
  image: {
    height: '40%',
    width: '40%',
    tintColor: Colors.white,
  },
  dotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 0,
    right: 0,
    height: '32%',
    width: '32%',
    borderRadius: 99,
  },
  dot: {
    backgroundColor: Colors.green,
    height: '64%',
    width: '64%',
    borderRadius: 99,
  },
});
const Profile = ({ onPress, backgroundColor = Colors.red, hasNotification }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor }, styles.profile]}>
      <Image source={images.profile} style={styles.image} />
      {hasNotification && (
        <View style={styles.dotContainer}>
          <View style={styles.dot} />
        </View>
      )}
    </TouchableOpacity>
  );
};
export default Profile;
