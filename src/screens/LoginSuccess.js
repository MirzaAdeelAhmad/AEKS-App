import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';
import LoginSignTitle from '../component/LoginSignTitle';
import PinCodeBox from '../component/PinCodeBox';
import ResendButton from '../component/ResendButton';
import {useNavigation} from '@react-navigation/native';

export default function LoginSuccess() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <View style={{flex: 1}}>
        <LoginSignTitle
          TextOne={'Type in'}
          TextTwo={'The Code'}
          TextThree={"We've sent a 6 digit code to"}
          TextFour={'your email/phone number'}
        />
      </View>
      {/* ----------------  Pin Box  --------------- */}
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'flex-end',
            paddingBottom: 40,
          }}>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                color: appColors.textGrayBlue,
                fontWeight: '600',
              }}>
              47 sec
            </Text>
          </View>
        </View>

        <View style={{width: '100%', height: '50%'}}>
          <Text
            style={{
              fontSize: 18,
              color: appColors.textGrayBlue,
              paddingLeft: 40,
              paddingTop: 20,
              paddingBottom: 10,
            }}>
            Didn't get the code
          </Text>
          <ResendButton OnPress={() => navigation.navigate('LoginThree')} />
        </View>
      </View>

      {/* -----------------  Successs -------------- */}
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFFE5',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '70%'}}>
          <Text
            style={{fontSize: 40, fontWeight: '800', color: appColors.RedPink}}>
            Success!
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400'}}>
            You have successfully created your account!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View
              style={{
                width: 80,
                backgroundColor: appColors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 50,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  padding: 5,
                }}>
                Done
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
