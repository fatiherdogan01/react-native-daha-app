import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import langs from '../langs';
import images from '../assets/images';
import { Colors } from '../theme/Colors';
import { ms } from 'react-native-size-matters';
import { navigationBarHeight } from '../Contants.ts';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1.5,
    borderLeftWidth: 1.5,
    borderTopWidth: 1.5,
    borderColor: Colors.shadow,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: navigationBarHeight,
  },
  imageContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  title: {
    alignSelf: 'center',
    paddingTop: ms(6),
  },
});
const hipSlop = { top: 20, bottom: 20, left: 20, right: 20 };
type TabItemProps = {
  routeIndex: number;
  currentRouteIndex: number;
  routeName: string;
  onPress(): void;
};

const TabItem = (props: TabItemProps) => {
  const { routeIndex, currentRouteIndex, routeName, onPress } = props;
  const isActive = routeIndex === currentRouteIndex;
  let image;
  let title;
  let color;
  let imageSize = ms(22);

  if (routeName === 'DiscoverScreen') {
    image = images.discover;
    title = langs.bottomBar.discover.toUpperCase();
    color = isActive ? Colors.black : Colors.gray;
  } else if (routeName === 'PortalScreen') {
    image = images.portal;
    imageSize = ms(72);
  } else if (routeName === 'WalletScreen') {
    image = images.star;
    title = langs.bottomBar.moreWallet.toUpperCase();
    color = isActive ? Colors.black : Colors.gray;
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.5} hitSlop={hipSlop} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={[
            styles.image,
            {
              width: imageSize,
              height: imageSize,
              tintColor: color,
            },
          ]}
        />
      </View>
      <Text style={[{ color }, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};
type BottomTabBarProps = {
  state: any;
  navigation: any;
};

function BottomTabBar(props: BottomTabBarProps) {
  const { state, navigation } = props;
  const { index: currentRouteIndex } = state;

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { name: routeName } = route;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (currentRouteIndex !== index && !event.defaultPrevented) {
            navigation.navigate(routeName);
          }
        };

        return (
          <TabItem
            key={index.toString()}
            routeIndex={index}
            currentRouteIndex={currentRouteIndex}
            routeName={routeName}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

export default BottomTabBar;
