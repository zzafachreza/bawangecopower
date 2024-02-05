import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { windowWidth, fonts, MyDimensi } from '../../utils/fonts';
import { getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap, MyHeader } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { ScrollView } from 'react-native';

export default function ({ navigation, route }) {
    const [user, setUser] = useState({});
    const [com, setCom] = useState({});
    const isFocused = useIsFocused();
    const [wa, setWA] = useState('');
    const [open, setOpen] = useState(false);



    useEffect(() => {


        if (isFocused) {
            getData('user').then(res => {
                console.log(res)
                setOpen(true);
                setUser(res);

            });
        }




    }, [isFocused]);



    const btnKeluar = () => {
        Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
            {
                text: 'Batal',
                style: "cancel"
            },
            {
                text: 'Keluar',
                onPress: () => {
                    storeData('user', null);

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Splash' }],
                    });
                }
            }
        ])
    };

    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 2,
                    paddingTop: 2,
                    paddingHorizontal: 10,
                    backgroundColor: colors.white,
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.primary,
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.black,
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <LinearGradient colors={[colors.white, colors.white]} style={{
            flex: 1,
        }}>



            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}
            <ScrollView>
                {open &&
                    <>

                        {/* header */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 20,
                            marginHorizontal: 20,
                            backgroundColor: colors.primary,
                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            // height: windowHeight / 6,
                        }}>
                            <View style={{
                                width: 60,
                                height: 60,
                                borderWidth: 1,
                                borderColor: colors.border,
                                overflow: 'hidden',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>

                                <Image source={{
                                    uri: user.foto_user
                                }} style={{
                                    width: 60,
                                    height: 60,

                                }} />
                            </View>

                            <View style={{
                                flex: 1,
                                paddingHorizontal: 10,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[800],
                                    fontSize: MyDimensi / 2,
                                    color: colors.white
                                }}>{user.nama_lengkap}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 15,
                                    color: colors.white
                                }}>{user.email}</Text>
                            </View>

                        </View>
                        {/* header */}
                        <View style={{
                            margin: 5,
                            flex: 1,
                            marginTop: 20,
                        }}>

                            <View style={{ padding: 10, }}>
                                <MyList label="Nama Lengkap" value={user.nama_lengkap} />
                                <MyList label="Email" value={user.email} />



                            </View>
                            {/* data detail */}
                        </View>
                    </>
                }

            </ScrollView>
            <View style={{
                padding: 20,
            }}>
                <MyButton warna={colors.primary} title="Edit Profile" Icons="create-outline" onPress={() => navigation.navigate('AccountEdit', user)} />
                <MyGap jarak={10} />
                <MyButton onPress={btnKeluar} warna={colors.border} title="Log Out" Icons="log-out-outline" iconColor={colors.white} colorText={colors.white} />
            </View>
            {/* navigation bottom */}
            <View style={{
                height: 50,
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: colors.white,
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                    padding: 10,
                }}>
                    <Icon type='ionicon' name='home' color={colors.border} size={20} />


                </TouchableOpacity>




                <TouchableOpacity style={{
                    padding: 10,
                }}>
                    <Icon type='ionicon' name='time' color={colors.border} size={20} />
                </TouchableOpacity>



                <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
                    padding: 10,
                }}>
                    <Icon type='ionicon' name='person' color={colors.primary} size={20} />
                </TouchableOpacity>
            </View>
        </LinearGradient >
    );
}

const styles = StyleSheet.create({});
