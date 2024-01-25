import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, ListItem, Button } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts } from '../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';

export default function MyInput({
  onFocus,
  label,
  nolabel = false,
  borderColor = colors.border,
  backgroundColor = colors.white,
  editable,
  icon = true,
  maxLength,
  iconname,
  onChangeText,
  value,
  borderWidth = 1,
  textColor = colors.black,
  keyboardType,
  secureTextEntry,
  styleInput,
  placeholder,
  autoFocus,
  multiline,
  label2,
  styleLabel,
  colorIcon = colors.white,
}) {

  const [tutup, setTutup] = useState(true);
  return (
    <View style={{

    }}>

      <View
        style={{

          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: !nolabel ? 5 : 0,
        }}>
        {icon && !nolabel && <Icon type="ionicon" name={iconname} color={colorIcon} size={MyDimensi / 2} />}


        {!nolabel && <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colorIcon,
            left: icon ? 10 : 5,
            fontSize: MyDimensi / 2.5,
            ...styleLabel,
          }}>
          {label}
        </Text>}
      </View>
      <View style={{
        position: 'relative'
      }}>
        <TextInput
          editable={editable}
          placeholderTextColor={colors.border}
          maxLength={maxLength}
          multiline={multiline}
          autoFocus={autoFocus}
          onFocus={onFocus}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry ? tutup : false}
          keyboardType={keyboardType}

          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          style={{
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderRadius: 30,
            borderWidth: borderWidth,
            paddingLeft: 20,
            color: textColor,
            fontSize: MyDimensi / 2.5,
            fontFamily: fonts.primary[400],
            ...styleInput,
          }}
        />
        {secureTextEntry &&
          <TouchableOpacity onPress={() => {
            if (tutup) {
              setTutup(false);
            } else {
              setTutup(true);
            }
          }} style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <Icon type="ionicon" name={!tutup ? 'eye-off' : 'eye'} color={colors.textLabel} size={18} />
          </TouchableOpacity>}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({});
