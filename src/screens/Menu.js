import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import MenuList from '../component/MenuList';
// ------------- impoting images and icons -----------
import CrossIcon from '../assets/images/CrossIcon.png';
import {appColors} from '../theme/Theme';
// ------------- importing images and logos --------------
import AccountInformarionIcon from '../assets/images/AccountInformation.png';
import MyOredrIcon from '../assets/images/MyOrders.png';
import LIstOfRecipenticon from '../assets/images/ListOfRecipents.png';
import SupportIcon from '../assets/images/Support.png';
import SettingIcon from '../assets/images/Setting.png';
import InformtionIcon from '../assets/images/Information.png';
import NOtificationICon from '../assets/images/NotificationMessageIcon.png';

export default function Menu() {
  const navigation = useNavigation();
  const [FirstSwitchChage, setFirstSwitchChage] = useState(false);
  const [SecondSwitchChage, setSecondSwitchChage] = useState(false);
  const FirsttoggleSwitch = value => {
    setFirstSwitchChage(value);
  };
  const SecondToggleSwitch = value => {
    setSecondSwitchChage(value);
  };
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.MainView}>
            <View style={styles.FilterTopView}>
              <Text style={styles.FilterText}>Menu</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={CrossIcon} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
            {/* ----------- Menu Lists ------------ */}
            <MenuList
              ImageICon={AccountInformarionIcon}
              TextName={'Account Information'}
              OnPress={() => navigation.navigate('AccountInformation')}
            />
            <MenuList
              ImageICon={MyOredrIcon}
              TextName={'My orders'}
              OnPress={() => navigation.navigate('Order')}
            />
            <MenuList
              ImageICon={LIstOfRecipenticon}
              TextName={'List of recipients'}
            />
            <MenuList
              ImageICon={SupportIcon}
              TextName={'Support'}
              OnPress={() => navigation.navigate('Support')}
            />
            <MenuList
              ImageICon={SettingIcon}
              r
              TextName={'Settings'}
              OnPress={() => navigation.navigate('Setting')}
            />
            <MenuList
              ImageICon={InformtionIcon}
              TextName={'Information'}
              OnPress={() => navigation.navigate('Information')}
            />
            <MenuList
              ImageICon={NOtificationICon}
              TextName={'Notification Settings'}
            />

            <View style={[styles.SwitchButtonView, styles.BoxShadow]}>
              <View style={styles.PushNotificationSubView}>
                <Text style={styles.PushNotificationText}>
                  Push Notifications
                </Text>
                <Switch
                  value={FirstSwitchChage}
                  onValueChange={FirsttoggleSwitch}
                  trackColor={{true: 'red', false: null}}
                />
              </View>

              <View style={styles.PushNotificationSubView}>
                <Text style={styles.PushNotificationText}>
                  Email Notifications
                </Text>
                <Switch
                  value={SecondSwitchChage}
                  onValueChange={SecondToggleSwitch}
                  trackColor={{true: 'red', false: null}}
                />
              </View>
            </View>

            <View style={[styles.LogoutView, styles.BoxShadow]}>
              <TouchableOpacity>
                <Text style={styles.logout}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainView: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  FilterTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: appColors.textgray,
  },
  FilterText: {
    fontSize: 24,
    fontWeight: '700',
    color: appColors.textGrayBlue,
  },
  SwitchButtonView: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItemsL: 'center',
    backgroundColor: appColors.background,
    elevation: 8,
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

  PushNotificationSubView: {
    // height: '50%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
  PushNotificationText: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.textGrayBlue,
  },
  LogoutView: {
    width: '100%',
    height: 55,
    backgroundColor: appColors.background,
    marginTop: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    elevation: 10,
  },
  logout: {
    fontSize: 16,
    fontWeight: '800',
    color: appColors.RedPink,
    marginLeft: 20,
  },
});
