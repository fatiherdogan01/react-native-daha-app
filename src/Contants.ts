import { ms } from 'react-native-size-matters';

export const BASE_URL = 'https://api.extrazone.com';
export const config = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Country-Id': 'TR',
    'X-Language-Id': 'TR',
  },
};

export const navigationBarHeight = ms(60);
export const headerHeight = ms(40);
export const borderRadius = 20;
export const vertical = ms(10);
export const horizontal = ms(10);

export const titleTagStyle = {
  paddingVertical: vertical,
  paddingHorizontal: horizontal,
  fontWeight: '700',
  fontSize: 24,
};

export const promotionCardTitleTagStyle = {
  paddingVertical: vertical,
  textAlign: 'center',
  paddingHorizontal: ms(30),
  fontWeight: '600',
  fontSize: 18,
};

export const descriptionTagStyle = {
  paddingVertical: vertical,
  paddingHorizontal: horizontal,
  fontSize: 16,
};

export const participationTagStyle = {
  fontWeight: '600',
  paddingVertical: vertical,
  fontSize: 20,
};
