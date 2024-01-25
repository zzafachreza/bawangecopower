import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Icon, ListItem, Button } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts } from '../../utils/fonts';

export default function MyPicker({
  label,
  iconname,
  onValueChange,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  styleInput,
  placeholder,
  label2,
  styleLabel,
  colorIcon = colors.primary,
  data = [],
}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 0,
        }}>
        <Icon type="ionicon" name={iconname} color={colors.white} size={MyDimensi / 2.5} />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            left: 10,
            fontSize: MyDimensi / 2.5,
            ...styleLabel,
          }}>
          {label}
        </Text>
      </View>

      <View style={{
        borderWidth: 0,
        borderColor: colors.primary,
        backgroundColor: colors.white,
        borderRadius: 30,
        marginTop: 5,
        fontFamily: fonts.secondary[600],

      }}>
        <Picker style={{ height: 48, transform: [{ scale: 0.9 }] }}
          selectedValue={value} onValueChange={onValueChange}>
          {data.map(item => {
            return <Picker.Item textStyle={{ fontSize: MyDimensi / 2.5 }} value={item.value} label={item.label} />;
          })}
        </Picker>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
