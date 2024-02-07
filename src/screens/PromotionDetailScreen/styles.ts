import { Colors } from '../../theme/Colors.ts';
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  backButton: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: ms(24),
    left: ms(10),
    backgroundColor: Colors.black,
    width: ms(36),
    height: ms(36),
    borderRadius: 99,
  },
  backImage: {
    width: '48%',
    height: '48%',
  },
  activityIndicator: {
    width: '100%',
    height: '100%',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: ms(10),
    left: ms(10),
    right: ms(10),
  },
  bottomOpactiy: {
    opacity: 0.3,
    height: ms(80),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomButton: {
    height: ms(48),
  },
  bottomContainer: {
    marginBottom: ms(58),
  },
});
