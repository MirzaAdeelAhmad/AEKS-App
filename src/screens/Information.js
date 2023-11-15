import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import backArrowIcon from '../assets/images/BackArrow.png';
import {appColors} from '../theme/Theme';
import {useNavigation} from '@react-navigation/native';

export default function Information() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView
        style={{
          width: '90%',
          height: '100%',
          backgroundColor: appColors.background,
          alignSelf: 'center',
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 30,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backArrowIcon} style={{width: 30, height: 15}} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '700',
                color: appColors.textGrayBlue,
                marginLeft: 15,
              }}>
              Privacy Policy
            </Text>
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            Who May Use the Services
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 25,
            }}>
            By using our app and services, you acknowledge that you have read
            and agree to our Privacy Policy and Terms and Conditions. If you do
            not agree with any part of these documents, please refrain from
            using our app.
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 20,
            }}>
            If you have questions or concerns about this Privacy Policy or Terms
            and Conditions, please contact us at [Contact Information].
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 20,
            }}>
            We aim to deliver orders promptly, but delays may occur due to
            unforeseen circumstances. You agree to inspect your order upon
            delivery and report any issues promptly.
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            Terms
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            We may share your information with third parties for purposes like
            payment processing, delivery partners, and marketing.
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            We prioritize the security of your data and implement measures to
            protect it from unauthorized access or disclosure.
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            Improve our app, services, and customer support.
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            We prioritize the security of your data and implement measures to
            protect it from unauthorized access or disclosure
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            We aim to deliver orders promptly, but delays may occur due to
            unforeseen circumstances. You agree to inspect your order upon
            delivery and report any issues promptly.
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 15,
            }}>
            The app's content and trademarks are protected by intellectual
            property laws.
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: appColors.textGrayBlue,
              marginTop: 15,
              marginBottom: 30,
            }}>
            You can access, correct, or delete your personal information at any
            time. You can also opt out of marketing communications.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
