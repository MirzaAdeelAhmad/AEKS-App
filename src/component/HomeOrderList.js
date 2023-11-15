import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import TruckIcone from '../assets/images/Truck.png';
import PauseImage from '../assets/images/Pause.png';
import {appColors} from '../theme/Theme';

export default function HomeOrderList({OrderID, OredrPlace, OnPress}) {
  return (
    <View style={[styles.OrderList, styles.BoxShadow]}>
      <Image source={TruckIcone} />
      <View>
        <Text style={{fontSize: 17, fontWeight: '700'}}>{OrderID}</Text>
        <Text style={{fontSize: 13}}>{OredrPlace}</Text>
      </View>
      <TouchableOpacity onPress={OnPress}>
        <Image source={PauseImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderList: {
    width: '100%',
    height: 86,
    backgroundColor: appColors.background,
    marginVertical: 7,
    paddingHorizontal: 50,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 7,
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
