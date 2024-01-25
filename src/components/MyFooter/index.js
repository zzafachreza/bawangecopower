import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

export default function MyFooter() {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: colors.secondary,
                marginHorizontal: 10,
                fontFamily: fonts.primary.normal,
                fontSize: 40
            }}>A</Text>
            <Text style={{
                color: colors.secondary,
                marginHorizontal: 10,
                fontFamily: fonts.primary.normal,
                fontSize: 40
            }}>J</Text>
            <Text style={{
                color: colors.secondary,
                marginHorizontal: 10,
                fontFamily: fonts.primary.normal,
                fontSize: 40
            }}>A</Text>
            <Text style={{
                color: colors.secondary,
                marginHorizontal: 10,
                fontFamily: fonts.primary.normal,
                fontSize: 40
            }}>I</Text>
            <Text style={{
                color: colors.secondary,
                marginHorizontal: 10,
                fontFamily: fonts.primary.normal,
                fontSize: 40
            }}>B</Text>
        </View>
    )
}

const styles = StyleSheet.create({})