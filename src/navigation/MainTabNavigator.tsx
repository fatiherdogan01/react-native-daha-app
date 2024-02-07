import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';
import PortalScreen from '../screens/PortalScreen';
import WalletScreen from '../screens/WalletScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

const Tab = createBottomTabNavigator();
export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="DiscoverScreen"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} />
      <Tab.Screen name="PortalScreen" component={PortalScreen} />
      <Tab.Screen name="WalletScreen" component={WalletScreen} />
    </Tab.Navigator>
  );
};
