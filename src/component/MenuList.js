import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';

export default function MenuList({TextName, ImageICon, OnPress}) {
  return (
    <View>
      <TouchableOpacity onPress={OnPress}>
        <View style={[styles.ListView, styles.BoxShadow]}>
          <Image
            source={ImageICon}
            style={{width: 25, height: 25, marginHorizontal: 20}}
          />
          <Text style={{fontSize: 16, fontWeight: '600'}}>{TextName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  ListView: {
    width: '100%',

    backgroundColor: appColors.background,
    marginTop: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    paddingVertical: 20,
  },
  BoxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
