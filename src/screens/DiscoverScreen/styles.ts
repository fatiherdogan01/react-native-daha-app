import { StyleSheet } from 'react-native';
import { headerHeight, vertical } from '../../Contants.ts';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: headerHeight,
    marginBottom: vertical,
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
});
