import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import OrderSentImage from '../assets/images/OrderSentImage.png';
import QRCodeImage from '../assets/images/QRCodeImage.png';
import {appColors} from '../theme/Theme';
import Button from '../component/Button';

export default function OrderSentComponent({onBtnPress, OrderPosition, Name}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.329)',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 30,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      <View
        style={{
          width: '90%',
          height: '70%',
          backgroundColor: appColors.background,
          borderRadius: 30,
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={{paddingTop: 30}}>
            <Image source={OrderSentImage} />
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: appColors.LightGreen,
              paddingTop: 30,
            }}>
            {OrderPosition}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: appColors.textgray,
              paddingTop: 10,
            }}>
            Write down your parcel number or scan the{' '}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: appColors.textgray,
              paddingTop: 10,
            }}>
            QR code
          </Text>
          <View style={{paddingTop: 30}}>
            <Image source={QRCodeImage} />
          </View>
        </View>
        <View>
          <Button
            Name={Name}
            OnPress={onBtnPress}
            TextColor={'white'}
            width={'80%'}
            backgroundColor={appColors.BtnColor}
          />
        </View>
      </View>
    </View>
  );
}
