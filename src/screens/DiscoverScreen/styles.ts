import { StyleSheet } from 'react-native';
import { headerHeight, navigationBarHeight, vertical } from '../../Contants.ts';
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: headerHeight,
    marginVertical: vertical,
  },
  promotionContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: headerHeight,
    marginBottom: navigationBarHeight,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
});
