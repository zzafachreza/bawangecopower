import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Slider from '@react-native-community/slider';

export default function Home({ navigation, route }) {

  var fill = 0;
  var jam = parseFloat(moment().format('HH'));


  if (jam >= 6 && jam <= 7) {
    fill = 15;
  } else if (jam >= 8 && jam <= 9) {
    fill = 24;
  } else if (jam >= 10 && jam <= 11) {
    fill = 40;
  } else if (jam >= 12 && jam <= 13) {
    fill = 55;
  } else if (jam >= 14 && jam <= 15) {
    fill = 65;
  } else if (jam >= 16 && jam <= 17) {
    fill = 85;
  } else if (jam >= 17 && jam <= 18) {
    fill = 100;
  } else if (jam >= 19 && jam <= 20) {
    fill = 85;
  } else if (jam >= 21 && jam <= 22) {
    fill = 65;
  } else if (jam >= 23 && jam <= 24) {
    fill = 55;
  } else if (jam >= 0 && jam <= 1) {
    fill = 40;
  } else if (jam >= 2 && jam <= 3) {
    fill = 24;
  } else if (jam >= 4 && jam <= 5) {
    fill = 15;
  }





  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});
  const [lampu, setLampu] = useState(0);
  const cekLampu = () => {

    axios.post(apiURL + 'update_lampu').then(res => {
      console.log(res.data);
      setLampu(res.data);
    })

  }

  const _getTransaction = async () => {

    getData('user').then(u => {
      console.log(u)
      setUser(u);
    })


  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);


  const [pilih, setPilih] = useState(1);


  return (

    <LinearGradient colors={[colors.white, colors.white]} style={{
      flex: 1,
    }}>






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


      <Text style={{
        textAlign: 'center',
        fontFamily: fonts.secondary[600],
        marginTop: 10,
      }}>{moment().format('HH:mm')}</Text>

      <View style={{
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 10,
        overflow: 'hidden'
      }}>
        <TouchableWithoutFeedback onPress={() => {
          setPilih(1);
        }}>
          <View style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pilih == 1 ? colors.primary : colors.white,
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: MyDimensi / 2,
              color: pilih == 1 ? colors.white : colors.primary,
            }}>Solar Panel</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          setPilih(0)
        }}>
          <View style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pilih == 0 ? colors.primary : colors.white,
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: MyDimensi / 2,
              color: pilih == 0 ? colors.white : colors.primary,
            }}>Lights</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>


      {pilih == 1 &&

        <View style={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center'
        }}>


          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: MyDimensi / 2,
            marginBottom: 5,
          }}>
            Today
          </Text>
          <AnimatedCircularProgress
            size={300}
            width={15}
            fill={fill}
            tintColor={colors.primary}
            backgroundColor={colors.border}>
            {
              (fill) => (

                <>

                  {lampu == 0 && <Image source={require('../../assets/nyala.png')} style={{
                    height: 60,
                    width: 40,
                  }} />}
                  {lampu == 1 && <Image source={require('../../assets/mati.png')} style={{
                    height: 60,
                    width: 40,
                  }} />}
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: MyDimensi / 1.5,
                    marginBottom: 10,
                  }}>
                    Power Battery
                  </Text>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: MyDimensi / 0.5,
                    textAlign: 'center'
                  }}>

                    {fill}%
                  </Text>
                </>
              )
            }
          </AnimatedCircularProgress>

          <View style={{ marginTop: 10 }}>
            <TouchableOpacity onPress={cekLampu}>
              <Image source={lampu == 0 ? require('../../assets/power.png') : require('../../assets/on.png')} style={{
                width: 100,
                height: 100,
              }} />
            </TouchableOpacity>

          </View>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: MyDimensi / 2.5,
          }}>Click to turn <Text style={{
            color: colors.danger
          }}>on</Text>/<Text style={{
            color: colors.primary
          }}>off</Text> the solar panel!</Text>

        </View>

      }


      {pilih == 0 &&

        <View style={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center'
        }}>



          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: MyDimensi / 2,
            marginBottom: 10,
          }}>
            Lamp Intensity
          </Text>
          <AnimatedCircularProgress
            size={300}
            width={15}
            fill={100}
            tintColor={colors.primary}
            backgroundColor={colors.border}>
            {
              (fill) => (

                <>


                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: MyDimensi / 0.5,
                    textAlign: 'center'
                  }}>

                    100%
                  </Text>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: MyDimensi / 2,
                    color: '#959595',
                    marginBottom: 10,
                  }}>
                    Power Consumption
                  </Text>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: MyDimensi / 2,
                    color: colors.primary,
                    marginBottom: 10,
                  }}>
                    12W/Hr
                  </Text>
                </>
              )
            }
          </AnimatedCircularProgress>

          <View style={{
            padding: 10,
            height: 40,
            position: 'relative',
            width: '100%',
            marginTop: 20,
          }}>
            <Image source={require('../../assets/line.png')} style={{
              width: 360,
              resizeMode: 'contain',
              height: 10,
              top: 30,
              position: 'absolute'
            }} />
            <Slider
              style={{ width: '100%', height: 50 }}
              value={50}
              minimumValue={0}
              thumbImage={require('../../assets/pad.png')}
              maximumValue={100}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor="#000000"
            />
          </View>

          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: MyDimensi / 2.5,
            color: colors.black,
            marginTop: 10,
          }}>
            Color Temperature
          </Text>
        </View>

      }



      {/* navigation bottom */}
      <View style={{
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='home' color={colors.secondary} size={20} />


        </TouchableOpacity>








        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='person' color={colors.secondary} size={20} />
        </TouchableOpacity>
      </View>

    </LinearGradient >
  )
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})