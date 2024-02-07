import React from 'react';
import { Text, View } from 'react-native';
import langs from '../../langs';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{langs.bottomBar.portal}</Text>
    </View>
  );
};
export default HomeScreen;
