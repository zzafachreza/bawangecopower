import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const MyDimensi = (windowHeight * windowWidth) / 10000;

export const fonts = {
  primary: {
    300: 'Poppins-Light',
    400: 'Poppins-Regular',
    600: 'Poppins-SemiBold',
    700: 'Poppins-Bold',
    800: 'Poppins-ExtraBold',
    900: 'Poppins-Black',
    normal: 'HammersmithOne-Regular',
  },
  secondary: {
    200: 'Montserrat-ExtraLight',
    300: 'Montserrat-Light',
    400: 'Montserrat-Regular',
    600: 'Montserrat-Medium',
    700: 'Montserrat-Bold',
    800: 'Montserrat-ExtraBold',
    900: 'Roboto-Black',
    normal: 'Fonetis',
  },
};
