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
} from 'react-native';
import { windowWidth, fonts } from '../../utils/fonts';
import { apiURL, getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function Pendonor({ navigation, route }) {


    const [kirim, setKirim] = useState(route.params);
    const [loading, setLoading] = useState(false);
    const sendServer = () => {
        setLoading(true);
        console.log(kirim);
        axios.post(apiURL + 'update_profile', kirim).then(res => {
            console.log(res.data)

            setLoading(false);

            if (res.data.status == 200) {
                Alert.alert(MYAPP, res.data.message);
                console.log(res.data.data);
                storeData('user', res.data.data);
                navigation.replace('Home');
            }
        })
    }

    useEffect(() => {
        setKirim({
            ...kirim,
            newfoto_user: null,
        })
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            <MyHeader judul="Pendonor" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={{
                paddingHorizontal: 20,
            }}>

                <View style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => {


                        launchImageLibrary({
                            includeBase64: true,
                            quality: 1,
                            mediaType: "photo",
                            maxWidth: 200,
                            maxHeight: 200
                        }, response => {
                            // console.log('All Response = ', response);

                            setKirim({
                                ...kirim,
                                newfoto_user: `data:${response.type};base64, ${response.base64}`,
                            });
                        });



                    }} style={{
                        width: 100,
                        height: 100,
                        borderWidth: 1,
                        borderColor: colors.border,
                        overflow: 'hidden',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={{
                            uri: kirim.newfoto_user !== null ? kirim.newfoto_user : kirim.foto_user,
                        }} />
                    </TouchableOpacity>
                </View>



                <MyInput label="Nama lengkap" iconname="person-outline" value={kirim.nama_lengkap} onChangeText={x => setKirim({ ...kirim, nama_lengkap: x })} />
                <MyGap jarak={5} />
                <MyInput label="Telepon / Whatsapp" iconname="logo-whatsapp" keyboardType="phone-pad" value={kirim.telepon} onChangeText={x => setKirim({ ...kirim, telepon: x })} />

                <MyGap jarak={5} />
                <MyInput label="Domisili" placeholder="masukan domisili" iconname="location-outline" value={kirim.domisili} onChangeText={x => setKirim({ ...kirim, domisili: x })} />
                <MyGap jarak={5} />
                <MyInput label="Alamat Lengkap" placeholder="masukan alamat lengkap" multiline iconname="home-outline" value={kirim.alamat} onChangeText={x => setKirim({ ...kirim, alamat: x })} />

                <MyGap jarak={5} />
                <MyPicker iconname="trail-sign-outline" label="Kecamatan" value={kirim.kecamatan} onValueChange={x => {
                    setKirim({
                        ...kirim,
                        kecamatan: x
                    })
                }} data={[
                    { label: '', value: '' },
                    { value: 'Sambas', label: 'Sambas' },
                    { value: 'Galing', label: 'Galing' },
                    { value: 'Paloh', label: 'Paloh' },
                    { value: 'Pemangkat', label: 'Pemangkat' },
                    { value: 'Teluk Keramat', label: 'Teluk Keramat' },
                    { value: 'Sejangkung', label: 'Sejangkung' },
                    { value: 'Jawai', label: 'Jawai' },
                    { value: 'Sebawi', label: 'Sebawi' },
                    { value: 'Tebas', label: 'Tebas' },
                    { value: 'Subah', label: 'Subah' },
                    { value: 'Sajingan', label: 'Sajingan' },
                    { value: 'Salatiga', label: 'Salatiga' },
                    { value: 'Tekarang', label: 'Tekarang' },
                    { value: 'Selakau Timur', label: 'Selakau Timur' },
                    { value: 'Jawai Selatan', label: 'Jawai Selatan' },
                    { value: 'Semparuk', label: 'Semparuk' },
                    { value: 'Tangaran', label: 'Tangaran' },
                ]} />
                <MyGap jarak={5} />
                <MyPicker iconname="water-outline" label="Golongan Darah" value={kirim.golongan_darah} onValueChange={x => {
                    setKirim({
                        ...kirim,
                        golongan_darah: x
                    })
                }} data={[
                    { label: '', value: '' },
                    { label: 'A +', value: 'A +' },
                    { label: 'A', value: 'A' },
                    { label: 'B +', value: 'B +' },
                    { label: 'O', value: 'O' },
                    { label: 'O +', value: 'O +' },
                    { label: 'AB', value: 'AB' },
                    { label: 'AB +', value: 'AB +' },
                ]} />
                <MyGap jarak={5} />


                <MyInput label="Password" iconname="lock-closed-outline" secureTextEntry={true} onChangeText={x => setKirim({ ...kirim, newpassword: x })} placeholder="Kosongkan jika tidak diubah" />
                <MyGap jarak={20} />
                {loading && <ActivityIndicator color={colors.primary} size="large" />}

                {!loading && <MyButton warna={colors.secondary} colorText={colors.white} iconColor={colors.white} onPress={sendServer} title="Simpan" Icons="download-outline" />}
                <MyGap jarak={20} />
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})