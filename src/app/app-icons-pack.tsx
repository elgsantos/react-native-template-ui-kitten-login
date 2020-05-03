import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

/**
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages#3rd-party-icon-packages
 */
const IconProvider = (source: ImageRequireSource) => ({
  toReactElement: ({ animation, ...style }) => (
    <Image style={style} source={source} />
  ),
});

export const AppIconsPack = {
  name: 'app',
  icons: {
    'logo': IconProvider(require('../assets/images/icon.png')),
  },
};
