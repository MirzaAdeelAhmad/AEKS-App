import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';

export default function InputText({
  width,
  placeholder,
  onChangeText,
  value,
  paddingHorizontal,
  marginHorizontal,
}) {
  const customStyle = {};
  // if (paddingHorizontal) customStyle.paddingHorizontal = paddingHorizontal;
  // if (marginHorizontal) customStyle.marginHorizontal = marginHorizontal;
  return (
    <View style={[styles.inputView, styles.boxShadow]}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, customStyle, {width: width}]}
        placeholderTextColor={'gray'}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    height: 53,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: appColors.background,
    elevation: 8,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  boxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
