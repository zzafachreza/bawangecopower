import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';

import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';


var whoosh = new Sound('https://zavalabs.com/islamic/pendahuluan.mp3',
    Sound.MAIN_BUNDLE
).release();

export default function AudioUtama() {

    const [nol, setNol] = useState({
        play: false,
        url: 'https://zavalabs.com/islamic/pendahuluan.mp3',
        nama: 'PENDAHULUAN',
        status: 'OPEN',
    })


    return (
        <View style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#CDCDCD'

        }}>
            <TouchableOpacity onPress={() => {
                if (!nol.play) {
                    setNol({
                        ...nol,
                        play: true
                    });
                    whoosh.play();
                } else {
                    setNol({
                        ...nol,
                        play: false
                    })
                    whoosh.pause();
                }
            }} style={{
                padding: 10,
                backgroundColor: nol.status == "OPEN" ? colors.primary : 'gray',
                borderRadius: 10,
                width: 60,
            }}>
                <Icon name={nol.play ? 'pause' : 'play'} type="ionicon" color={nol.status == "OPEN" ? colors.secondary : 'white'} />
            </TouchableOpacity>
            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: nol.status == "OPEN" ? colors.primary : 'gray',
                flex: 1,
                marginLeft: 10,
            }}>
                {nol.nama}
            </Text>
            {nol.status == "OPEN" &&
                <TouchableOpacity style={{
                    padding: 10,
                    backgroundColor: colors.secondary,
                    borderRadius: 10,
                }}>

                    <Text onPress={() => {
                        Alert.alert(
                            "Alhamdulillah",
                            "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                            [
                                {
                                    text: "TIDAK",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "YA", onPress: () => setSatu({
                                        ...satu,
                                        status: 'DONE'
                                    })
                                }
                            ]
                        );
                    }} style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 20,
                        color: colors.primary
                    }}>Selesai</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({})