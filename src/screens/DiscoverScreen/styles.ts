import { Dimensions, StyleSheet } from 'react-native';
import { headerHeight, navigationBarHeight, vertical } from '../../Contants.ts';
const height = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: headerHeight,
    marginVertical: vertical,
  },
  daha: {
    height: '100%',
    resizeMode: 'contain',
  },
  rightContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftContainer: {
    flex: 0.6,
  },
  activityIndicator: {
    height: height - (headerHeight + navigationBarHeight),
  },
});
