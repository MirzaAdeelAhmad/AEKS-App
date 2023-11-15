import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';

export default function Button({
  OnPress,
  Name,
  width,
  backgroundColor,
  TextColor,
  ImageButton,
  tintColor,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.btnView,
        styles.BoxShadow,
        {width: width, backgroundColor: backgroundColor, flexDirection: 'row'},
      ]}
      onPress={OnPress}>
      <Image
        source={ImageButton}
        style={{width: 20, height: 20}}
        tintColor={tintColor}
      />
      <Text style={[styles.btnText, {color: TextColor}]}>{Name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnView: {
    height: 55,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 6,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  BoxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});
