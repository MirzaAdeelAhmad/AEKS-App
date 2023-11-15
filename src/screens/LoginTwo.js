import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';
import LoginSignTitle from '../component/LoginSignTitle';
import PinCodeBox from '../component/PinCodeBox';
import ResendButton from '../component/ResendButton';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LoginTwo() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <LoginSignTitle
          TextOne={'Type in'}
          TextTwo={'The Code'}
          TextThree={"We've sent a 6 digit code to"}
          TextFour={'your email/phone number'}
        />
      </View>

      <View style={{flex: 1}}>
        {/* ----------------  Pin Box  --------------- */}
        <View
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'space-between',
            paddingBottom: 40,
          }}>
          <PinCodeBox
            firstPincode={'0'}
            secondPincode={'0'}
            thirdPincode={'0'}
            forthPincode={'0'}
            fifthPincode={'0'}
            sisthPincode={'0'}
          />
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
    </View>
  );
}
