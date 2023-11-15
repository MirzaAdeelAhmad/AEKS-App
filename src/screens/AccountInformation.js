import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import backArrowIcon from '../assets/images/BackArrow.png';
import {appColors} from '../theme/Theme';
import {useNavigation} from '@react-navigation/native';
import UserIcon from '../assets/images/UserIcon.png';
import EditIcon from '../assets/images/EditIcon.png';

export default function AccountInformation() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainSubView}>
            <View style={styles.HeaderView}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backArrowIcon} style={{width: 30, height: 15}} />
              </TouchableOpacity>
              <Text style={styles.PrivacyPolicyText}>Account Information</Text>
            </View>

            {/* ------------- Edit View ------------ */}

            <View style={[styles.UserEditMainView, styles.BoxShadow]}>
              <View style={styles.TopuserEditSubView}>
                <View style={styles.UserIconAndTExtView}>
                  <View style={[styles.UserIcon, styles.BoxShadow]}>
                    <Image source={UserIcon} style={{width: 25, height: 25}} />
                  </View>
                  <Text style={styles.UserName}>Adeel Mirza</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditAccountInformation')}>
                  <Image source={EditIcon} style={{width: 20, height: 20}} />
                </TouchableOpacity>
              </View>

              <View style={styles.EmailView}>
                <Text style={styles.EmailText}>Email: </Text>
                <Text style={{fontSize: 18}}>amirza3550@gmail.com</Text>
              </View>

              <View style={styles.PasswordView}>
                <Text style={styles.EmailText}>Password: </Text>
                <Text style={{fontSize: 18}}>12345</Text>
              </View>

              <View style={styles.PasswordView}>
                <Text style={styles.EmailText}>Phone No: </Text>
                <Text style={{fontSize: 18}}>03434408986</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSubView: {
    width: '90%',
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
  UserEditMainView: {
    width: '100%',
    backgroundColor: appColors.background,
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
    elevation: 8,
    marginBottom: 20,
  },
  TopuserEditSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UserIconAndTExtView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  UserIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: appColors.background,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  UserName: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
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
  EmailView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  EmailText: {
    fontSize: 18,
    color: 'gray',
  },
  PasswordView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  EmailText: {
    fontSize: 18,
    color: appColors.textGrayBlue,
  },
});
