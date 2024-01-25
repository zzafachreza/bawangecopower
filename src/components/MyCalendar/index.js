import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Icon, ListItem, Button } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts } from '../../utils/fonts';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';


export default function MyCalendar({
  label,
  valueShow,
  iconname,
  onDateChange,
  value,
  keyboardType,
  secureTextEntry,
  styleInput,
  placeholder,
  label2,
  iconColor = colors.white,
  textColor = colors.white,
  styleLabel,
  colorIcon = colors.white,
  data = [],
}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 0,
          position: 'relative'
        }}>
        <Icon type="ionicon" name={iconname} color={iconColor} size={MyDimensi / 2.5} />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: textColor,
            left: 10,
            fontSize: MyDimensi / 2.5,
            ...styleLabel,
          }}>
          {label}
        </Text>
      </View>

      <View style={{
        backgroundColor: colors.white,
        borderWidth: 0,
        borderRadius: 30,
        marginTop: 5,
        fontFamily: fonts.secondary[600],
        borderColor: colors.primary,
      }}>
        <Text style={{
          position: 'absolute',
          zIndex: 0,
          top: 15,
          left: 20,
          fontFamily: fonts.secondary[600],
          fontSize: MyDimensi / 2.5
        }}>{moment(value).format('DD MMMM YYYY')}</Text>
        <DatePicker

          style={{ width: '100%', height: 50, }}
          date={value}
          mode="date"
          placeholder={placeholder}
          showIcon={false}
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              fontFamily: fonts.secondary[600],
              fontSize: MyDimensi / 4,
              textAlign: 'left',
              alignItems: 'flex-start',
              opacity: 0,
              paddingLeft: 20,
              borderWidth: 0,
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={onDateChange}
        />

      </View>
    </>
  );
}

const styles = StyleSheet.create({});
