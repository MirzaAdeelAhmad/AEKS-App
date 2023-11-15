import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {appColors} from '../theme/Theme';
import MenuList from '../component/MenuList';
// ------------ Importing iMages And Icon -------------
import backArrowIcon from '../assets/images/BackArrow.png';
import EmailIcon from '../assets/images/EmailIcon.png';
import FAQIcon from '../assets/images/FAQicon.png';
import OnlineChatIcon from '../assets/images/OnlineChatImage.png';

export default function Support() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.HeaderView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backArrowIcon} style={{width: 30, height: 15}} />
          </TouchableOpacity>
          <Text style={styles.PrivacyPolicyText}>Support</Text>
        </View>
        <MenuList TextName={'Email'} ImageICon={EmailIcon} />
        <MenuList
          TextName={'FAQ'}
          ImageICon={FAQIcon}
          OnPress={() => navigation.navigate('FAQ')}
        />
        <MenuList
          TextName={'Online Chat'}
          ImageICon={OnlineChatIcon}
          OnPress={() => navigation.navigate('Message')}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    width: '90%',
    height: '100%',
    backgroundColor: appColors.background,
    alignSelf: 'center',
  },
  HeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  PrivacyPolicyText: {
    fontSize: 22,
    fontWeight: '700',
    color: appColors.textGrayBlue,
    marginLeft: 15,
  },
});
