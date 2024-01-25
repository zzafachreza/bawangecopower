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
    ScrollView,
    FlatList,
} from 'react-native';
import { windowWidth, fonts } from '../../utils/fonts';
import { apiURL, getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';



const MyList = ({ label, value }) => {
    return (
        <View
            style={{
                marginVertical: 10,
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


export default function Caridarahlist({ navigation, route }) {
    const kirim = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post(apiURL + 'cari', kirim).then(res => {
            console.log(res.data);
            setData(res.data)
        })
    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background
        }}>
            <MyHeader judul="Hasil Cari Darah" onPress={() => navigation.goBack()} />
            <View style={{
                padding: 10,
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderBottomColor: colors.danger
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        textAlign: 'center',
                        fontSize: 12
                    }}>Kecamatan </Text>
                    <Text tyle={{
                        fontFamily: fonts.secondary[800],
                        textAlign: 'center',
                        fontSize: 12,
                        color: colors.primary,
                    }}>{kirim.kecamatan}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        textAlign: 'center',
                        fontSize: 12
                    }}>Golongan Darah </Text>
                    <Text tyle={{
                        fontFamily: fonts.secondary[800],
                        textAlign: 'center',
                        fontSize: 12,
                        color: colors.primary,
                    }}>{kirim.golongan_darah}</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
            }}>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            backgroundColor: colors.primary,
                            padding: 10,
                            margin: 10,
                            borderRadius: 10,
                        }}>
                            <View style={{
                                padding: 10,
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end'
                            }}>
                                <Text style={{
                                    width: 50,
                                    height: 20,
                                    fontFamily: fonts.secondary[600],
                                    color: item.siap == 'Tidak' ? colors.white : colors.primary,
                                    borderRadius: 10,
                                    backgroundColor: item.siap == 'Tidak' ? colors.danger : colors.white,
                                    textAlign: 'center'
                                }}>{item.siap == 'Tidak' ? 'OFF' : 'ON'}</Text>
                            </View>
                            <View style={{
                                alignSelf: 'center',
                                width: 80,
                                height: 80,
                                borderWidth: 1,
                                borderColor: colors.border,
                                overflow: 'hidden',
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image style={{
                                    width: 80,
                                    height: 80,
                                }} source={{
                                    uri: item.foto_user
                                }} />
                            </View>
                            <MyList label="Nama Lengkap" value={item.nama_lengkap} />
                            <MyList label="Golongan Darah" value={item.golongan_darah} />
                            <MyList label="Kecamatan" value={item.kecamatan} />
                            <MyList label="Telepon" value={item.telepon} />
                            <MyButton onPress={() => {
                                if (item.siap !== 'Tidak') {
                                    Linking.openURL('https://wa.me/' + item.telepon)
                                } else {
                                    Alert.alert(MYAPP, 'Maaf Pendonor  belum siap Mendonorkan')
                                }
                            }} Icons="logo-whatsapp" title="Hubungi" warna='#13771D' />
                        </View>
                    )
                }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})