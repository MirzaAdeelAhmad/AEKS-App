import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import resendIcon from '../assets/icons/rotate.png';
export default function ResendButton({OnPress}) {
  return (
    <View>
      <TouchableOpacity onPress={OnPress}>
        <View
          style={[
            {
              width: '80%',
              backgroundColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10,
              flexDirection: 'row',
              elevation: 8,
            },
            styles.BoxShadow,
          ]}>
          <Image source={resendIcon} style={{width: 20, height: 20}} />
          <Text style={{fontSize: 16, fontWeight: '600', padding: 17}}>
            RESEND THE CODE
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BoxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
