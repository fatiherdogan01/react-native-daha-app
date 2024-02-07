import React from 'react';
import { NavigationContainer, DefaultTheme, NavigationProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { MainTabNavigator } from './MainTabNavigator';
import PromotionDetailScreen from '../screens/PromotionDetailScreen';
import { Colors } from '../theme/Colors.ts';

export type ScreenNames = ['PromotionDetail'];

export type BottomTabParamList =
  | {
      screen: 'PortalScreen';
      params: undefined;
    }
  | {
      screen: 'DiscoverScreen';
      params: undefined;
    }
  | {
      screen: 'WalletScreen';
      params: undefined;
    };

export type RootStackParamList = Record<ScreenNames[number], undefined | any> & {
  MainTab: BottomTabParamList;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptionsRight: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
};
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    text: Colors.black,
  },
};
const Navigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTab" options={screenOptionsRight} component={MainTabNavigator} />
        <Stack.Screen
          name="PromotionDetail"
          options={screenOptionsRight}
          component={PromotionDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
