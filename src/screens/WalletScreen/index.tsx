import React from 'react';
import { Text, View } from 'react-native';
import langs from '../../langs';

const WalletScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{langs.bottomBar.moreWallet}</Text>
    </View>
  );
};

export default WalletScreen;
