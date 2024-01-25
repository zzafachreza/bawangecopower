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
import { showMessage } from 'react-native-flash-message';
export default function Caridarah({ navigation }) {
    const [kirim, setKirim] = useState({
        kecamatan: '',
        golongan_darah: ''
    })
    return (
        <SafeAreaView style={{
            flex: 1,
            colors: colors.background
        }}>
            <MyHeader judul="Cari Darah" onPress={() => navigation.goBack()} />
            <View style={{
                padding: 20,
            }}>
                <Text style={{
                    fontSize: windowWidth / 14,
                    fontFamily: fonts.primary[800],
                    color: colors.primary,
                }}>Cari Darah</Text>
                <Text style={{
                    fontSize: windowWidth / 28,
                    fontFamily: fonts.primary[400],
                    color: colors.primary,
                    marginBottom: 10,
                }}>Silahkan cari golongan darah anda</Text>
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
                <MyGap jarak={10} />
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
                <MyGap jarak={20} />
                <MyButton title="Cari Darah" Icons="search" warna={colors.primary} onPress={() => {
                    if (kirim.kecamatan.length == 0 || kirim.golongan_darah.length == 0) {
                        showMessage({
                            type: 'danger',
                            message: 'Kecamatan dan Golongan darah tidak boleh kosong !'
                        })
                    } else {
                        navigation.navigate('Caridarahlist', kirim);
                    }
                }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})