import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import backArrowIcon from '../assets/images/BackArrow.png';
import {appColors} from '../theme/Theme';
import {useNavigation} from '@react-navigation/native';
// ----------- Importing Images and Icons ------------
import DownFilledArrow from '../assets/images/DownFilledArrow.png';
import FingerPrintImage from '../assets/images/FingerPrintImage.png';
import BellIcon from '../assets/images/BellImage.png';

export default function Setting() {
  const navigation = useNavigation();
  const [IsBiomatric, setIsBiomatric] = useState(false);
  const [IsPushNotification, setIsPushNotification] = useState(false);
  const [isEmailNotification, setisEmailNotification] = useState(false);
  const ChangeBiomatric = value => {
    setIsBiomatric(value);
  };
  const ChangePushNotification = value => {
    setIsPushNotification(value);
  };
  const ChangeEmailNotification = value => {
    setisEmailNotification(value);
  };
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView>
        <View style={styles.mainSubView}>
          <View style={styles.HeaderView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backArrowIcon} style={{width: 30, height: 15}} />
            </TouchableOpacity>
            <Text style={styles.PrivacyPolicyText}>Account Information</Text>
          </View>
          {/* ----------- Select language --------- */}
          <View style={[styles.LanguageView, styles.BoxShadow]}>
            <View>
              <Text style={styles.LanguageNameText}>Language</Text>
              <Text style={styles.SlectedLanguageText}>ENGLISH</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={DownFilledArrow}
                  style={{width: 16, height: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* --------- Biomatic -------- */}
          <View style={[styles.BiomatricView, styles.BoxShadow]}>
            <View style={styles.FingerPrintAndTextView}>
              <Image
                source={FingerPrintImage}
                style={{width: 27, height: 24}}
              />
              <Text style={styles.BiomatricText}>Biomatric</Text>
            </View>
            <View>
              <Switch
                value={IsBiomatric}
                onValueChange={ChangeBiomatric}
                trackColor={{true: appColors.RedPink}}
              />
            </View>
          </View>
          {/* ---------- Notification Setting ---------- */}
          <View style={[styles.NotificationSettingView, styles.BoxShadow]}>
            <View style={styles.BellAndNotificationTextView}>
              <Image
                source={BellIcon}
                style={{
                  width: 20,
                  height: 22,
                  tintColor: appColors.textGrayBlue,
                }}
              />
              <Text style={styles.NotificationSettingText}>
                Notification Settings
              </Text>
            </View>
          </View>
          {/* ---------- Push Notification and Email View --------- */}
          <View style={[styles.PushAndEmailNotifiactionView, styles.BoxShadow]}>
            <View style={styles.PushNotificationView}>
              <Text style={styles.PushNotificationText}>
                Push Notifications
              </Text>
              <Switch
                value={IsPushNotification}
                onValueChange={ChangePushNotification}
                trackColor={{true: appColors.RedPink}}
              />
            </View>
            <View style={styles.EmailNotificationView}>
              <Text style={styles.EmailNotificationText}>
                Email Notifications
              </Text>
              <Switch
                value={isEmailNotification}
                onValueChange={ChangeEmailNotification}
                trackColor={{true: appColors.RedPink}}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSubView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: appColors.background,
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
  LanguageView: {
    backgroundColor: appColors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  SelectLanguageView: {
    backgroundColor: 'red',
  },
  LanguageNameText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#535353',
    paddingBottom: 3,
  },
  SlectedLanguageText: {
    fontSize: 16,
    fontWeight: '600',
    color: appColors.textGrayBlue,
  },
  BoxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  BiomatricView: {
    backgroundColor: appColors.background,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  FingerPrintAndTextView: {
    flexDirection: 'row',
  },
  BiomatricText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: appColors.textGrayBlue,
  },
  NotificationSettingView: {
    backgroundColor: appColors.background,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  BellAndNotificationTextView: {
    flexDirection: 'row',
  },
  NotificationSettingText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: appColors.textGrayBlue,
  },
  PushAndEmailNotifiactionView: {
    backgroundColor: appColors.background,
    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  PushNotificationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  PushNotificationText: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.textGrayBlue,
  },
  EmailNotificationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  EmailNotificationText: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.textGrayBlue,
  },
});
