import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { ms } from 'react-native-size-matters';
import { Colors } from '../theme/Colors.ts';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ms(40),
    borderRadius: 20,
  },
  text: {
    paddingHorizontal: ms(12),
    fontWeight: '500',
    fontSize: 16,
  },
});
const CustomButton = ({ title, onPress, backgroundColor = Colors.red }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor }, styles.button]}>
      <Text style={[{ color: Colors.white }, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
