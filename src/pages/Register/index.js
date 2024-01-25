import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native';
import { ImageBackground } from 'react-native';
export default function Register({ navigation }) {

    const [kirim, setKirim] = useState({
        nama_lengkap: null,
        email: null,
        password: null
    });
    const [loading, setLoading] = useState(false);

    const [comp, setComp] = useState({});

    const card = new Animated.Value(-30);
    const img = new Animated.Value(-20);




    const masuk = () => {


        if (kirim.email == null && kirim.password == null) {
            Alert.alert(MYAPP, 'email dan Password tidak boleh kosong !');
        } else if (kirim.email == null) {
            Alert.alert(MYAPP, 'email tidak boleh kosong !');
        } else if (kirim.password == null) {
            Alert.alert(MYAPP, 'Password tidak boleh kosong !');
        } else {


            setLoading(true);
            console.log(kirim);

            axios
                .post(apiURL + 'pengguna', kirim)
                .then(res => {

                    console.log(res.data);
                    if (res.data.status == 404) {
                        showMessage({
                            type: 'danger',
                            message: res.data.message
                        })
                    } else {
                        showMessage({
                            type: 'success',
                            message: res.data.message
                        })
                        navigation.navigate('Login')
                    }
                }).finally(() => {
                    setLoading(false);
                });



        }




    }

    useEffect(() => {
        Animated.timing(card, {
            toValue: 1,
            duration: 850,
            useNativeDriver: false,
        }).start();
        Animated.timing(img, {
            toValue: 30,
            duration: 850,
            useNativeDriver: false,
        }).start();
        axios.post(apiURL + 'company').then(res => {
            setComp(res.data.data);
        })

    }, []);

    return (
        <ImageBackground source={require('../../assets/back.png')} style={{
            flex: 1,
        }}>
            <ScrollView style={{ flex: 1, position: 'relative' }}>




                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        marginTop: windowHeight / 12,
                        fontSize: MyDimensi / 0.8,
                        fontFamily: fonts.primary[800],
                        color: colors.primary,
                    }}>Register !</Text>

                    <Animated.Image source={require('../../assets/daftar.png')} style={{
                        marginTop: img,
                        width: windowWidth / 1.5,
                        height: windowWidth / 2.5,
                        resizeMode: 'contain'
                    }} />

                </View>


                <Animated.View style={{
                    padding: 20,
                    flex: 1, margin: 10,
                    bottom: card,
                    borderRadius: 10,
                }}>

                    <MyInput colorIcon={colors.white} label="Name" onChangeText={val => setKirim({
                        ...kirim,
                        nama_lengkap: val
                    })}
                        iconname="person-outline" placeholder="Please enter your name" />
                    <MyGap jarak={10} />

                    <MyInput colorIcon={colors.white} label="Email" onChangeText={val => setKirim({
                        ...kirim,
                        email: val
                    })}
                        iconname="mail-outline" placeholder="Please enter your email adress" />
                    <MyGap jarak={10} />
                    <MyInput
                        onChangeText={val => setKirim({
                            ...kirim,
                            password: val
                        })}
                        secureTextEntry={true}
                        label="Password"
                        iconname="lock-closed-outline"
                        placeholder="Please enter your password"
                    />

                    <MyGap jarak={40} />
                    {!loading &&




                        <>
                            <MyButton
                                onPress={masuk}
                                title="Register"
                                Icons="log-in-outline"
                            />
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                                <View style={{
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: MyDimensi / 2,
                                        fontFamily: fonts.primary[400],
                                        textAlign: 'center',
                                        color: colors.white
                                    }}>Already have an account? <Text style={{
                                        fontSize: MyDimensi / 2,
                                        fontFamily: fonts.primary[600],
                                        textAlign: 'center',
                                        color: colors.white
                                    }}>Login!</Text></Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </>


                    }



                </Animated.View>


                {loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>}
            </ScrollView>
        </ImageBackground>



    );
}

const styles = StyleSheet.create({});
