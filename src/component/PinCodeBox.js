import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';

export default function PinCodeBox({
  BorderWidth,
  BorderColor,
  TextColor,
  firstPincode,
  secondPincode,
  thirdPincode,
  forthPincode,
  fifthPincode,
  sisthPincode,
}) {
  return (
    <View style={{width: '80%', flexDirection: 'row', alignSelf: 'center'}}>
      <View
        style={[
          styles.pinBox,
          styles.boxShadow,
          {borderWidth: BorderWidth, borderColor: BorderColor},
        ]}>
        <TextInput
          placeholder={firstPincode}
          style={{fontSize: 42, fontWeight: '500'}}
          placeholderTextColor={TextColor}
        />
      </View>
      <View
        style={[
          styles.pinBox,
          styles.boxShadow,
          {borderWidth: BorderWidth, borderColor: BorderColor},
        ]}>
        <TextInput
          placeholder={secondPincode}
          style={{fontSize: 42, fontWeight: '500'}}
          placeholderTextColor={TextColor}
        />
      </View>
      <View
        style={[
          styles.pinBox,
          styles.boxShadow,
          {borderWidth: BorderWidth, borderColor: BorderColor},
        ]}>
        <TextInput
          placeholder={thirdPincode}
          style={{fontSize: 42, fontWeight: '500'}}
          placeholderTextColor={TextColor}
        />
      </View>
      <View
        style={[
          styles.pinBox,
          styles.boxShadow,
          {borderWidth: BorderWidth, borderColor: BorderColor},
        ]}>
        <TextInput
          placeholder={forthPincode}
          style={{fontSize: 42, fontWeight: '500'}}
          placeholderTextColor={TextColor}
        />
      </View>
      <View
        style={[
          styles.pinBox,
          styles.boxShadow,
          {borderWidth: BorderWidth, borderColor: BorderColor},
        ]}>
        <TextInput
          placeholder={fifthPincode}
          style={{fontSize: 42, fontWeight: '500'}}
          placeholderTextColor={TextColor}
        />
      </View>
      <View
        style={[
          styles.pinBox,
          styles.boxShadow,
          {borderWidth: BorderWidth, borderColor: BorderColor},
        ]}>
        <TextInput
          placeholder={sisthPincode}
          style={{fontSize: 42, fontWeight: '500'}}
          placeholderTextColor={TextColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinBox: {
    width: '15%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: appColors.background,
    marginRight: 8,
    elevation: 8,
  },
  boxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
});
