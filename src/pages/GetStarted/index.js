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
import { SliderBox } from "react-native-image-slider-box";
import { TouchableWithoutFeedback } from 'react-native';
export default function GetStarted({ navigation }) {

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

    const GAMABR = [
        require('../../assets/mulai.png'),
        require('../../assets/mulai.png'),
        require('../../assets/mulai.png'),
    ]



    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 0,
            backgroundColor: colors.white,

        }}>


            <View style={{

                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
                position: 'relative',
                overflow: 'hidden'
            }}>

                <SliderBox
                    autoplay
                    circleLoop

                    images={GAMABR}
                    sliderBoxHeight={windowHeight / 1.3}
                    resizeMode="cover"
                    dotColor={colors.primary}
                    inactiveDotColor={colors.white}
                    dotStyle={{
                        width: 20,
                        height: 6,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 10
                    }}

                />
                <View style={{
                    padding: 20,
                    position: 'absolute',
                    flexDirection: 'row',
                    alignItems: 'center',
                    top: 0,
                    width: windowWidth
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[800],
                        fontSize: MyDimensi / 1.2,
                        color: colors.white,
                        flex: 1,
                    }}>Welcome To BawangEcoPower!</Text>
                    <Image source={require('../../assets/logo.png')} style={{
                        width: MyDimensi / 0.5,
                        height: MyDimensi / 0.5,
                        resizeMode: 'contain'
                    }} />
                </View>
            </View>

            <View style={{
                flex: 1,
                paddingVertical: 10,
                justifyContent: 'center',
                paddingHorizontal: 30,
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.primary[400],
                    fontSize: MyDimensi / 2,
                    marginBottom: 10,
                    color: colors.black
                }}>Sign up or Login and we’ll get started.</Text>
                <MyButton onPress={() => navigation.navigate('Register')} title="Sign Up" Icons="create-outline" />
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: fonts.primary[400],
                        fontSize: MyDimensi / 2,
                        marginTop: 10,
                        color: colors.black
                    }}>Already have an account? <Text style={{
                        fontFamily: fonts.primary[800]
                    }}>Login</Text></Text>
                </TouchableWithoutFeedback>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
