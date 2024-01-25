import { Image, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'

import { colors, fonts, windowHeight } from '../../utils'
import { useNavigation } from '@react-navigation/native';
import { MYAPP, getData, storeData } from '../../utils/localStorage';

export default function MyMenu() {

    const navigation = useNavigation();

    const [user, setUser] = useState({});

    useEffect(() => {
        getData('user').then(uu => {
            setUser(uu)
        })
    }, [])


    return (
        <View></View>
    )
}

const styles = StyleSheet.create({})