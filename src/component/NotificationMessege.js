import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';
// ------------ Importing images and icons -----------
import NotificationMessageIcon from '../assets/images/NotificationMessageIcon.png';
import GlowingDots from '../assets/images/GlowingDots.png';
import LightColorDots from '../assets/images/LightsColorDots.png';

export default function NotificationMessege({OredrName}) {
  return (
    <View style={{width: '85%', alignSelf: 'center'}}>
      <TouchableOpacity style={styles.List}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={NotificationMessageIcon}
            style={{width: 25, height: 25, marginRight: 20}}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: appColors.textGrayBlue,
              }}>
              {OredrName}
            </Text>
            <Text style={{fontSize: 12, color: 'gray'}}>
              January 14, 2020 12:32
            </Text>
          </View>
        </View>
        <Image source={GlowingDots} style={{width: 15, height: 15}} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  List: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
  },
});
