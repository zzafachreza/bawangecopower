import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton, MyGap } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { MYAPP, getData } from '../../utils/localStorage';
import LinearGradient from 'react-native-linear-gradient';
export default function Splash({ navigation }) {

  const img = new Animated.Value(windowWidth / 3);
  const text = new Animated.Value(0);
  Animated.timing(img, {
    toValue: windowWidth / 1.5,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(text, {
    toValue: windowHeight / 4.5,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if (!res) {
          // navigation.replace('Login')
          navigation.replace('GetStarted')
        } else {

          navigation.replace('Home')
        }
      })
    }, 1200)
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 0,
      justifyContent: 'center',
      backgroundColor: colors.white,

    }}>



      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Animated.Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={{
            width: img,
            height: img,
            marginBottom: 20
          }}
        />

        <ActivityIndicator color={colors.primary} size="large" />
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
