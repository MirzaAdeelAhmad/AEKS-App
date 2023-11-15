import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../theme/Theme';
import {useNavigation} from '@react-navigation/native';
import InputText from '../component/InputText';
import backArrowIcon from '../assets/images/BackArrow.png';
import {width} from '../util/util';
import CheckBox from 'react-native-check-box';
import Button from '../component/Button';
import SaveAccountIcon from '../assets/images/SaveAccontImage.png';

export default function EditAccountInformation() {
  const navigation = useNavigation();
  const [isChecked, setisChecked] = useState(false);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [isAllValueAgree, setisAllValueAgree] = useState(false);

  useEffect(() => {
    if (
      FirstName == '' ||
      LastName == '' ||
      Email == '' ||
      PhoneNo == '' ||
      Password == '' ||
      ConfirmPassword == '' ||
      isChecked == false
    ) {
      setisAllValueAgree(true);
    } else {
      setisAllValueAgree(false);
    }
  }, [
    FirstName,
    LastName,
    Email,
    PhoneNo,
    ConfirmPassword,
    Password,
    isChecked,
  ]);
  const BackToNavigate = () => {
    if (isAllValueAgree == false) {
      navigation.goBack();
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <View style={styles.mainSubView}>
            <View style={styles.HeaderView}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backArrowIcon} style={{width: 30, height: 15}} />
              </TouchableOpacity>
              <Text style={styles.PrivacyPolicyText}>Account Information</Text>
            </View>

            <View style={styles.InputView}>
              <InputText
                width={(width * 90) / 100}
                placeholder={'First Name'}
                onChangeText={text => setFirstName(text)}
                value={FirstName}
              />
            </View>
            <View style={styles.InputView}>
              <InputText
                width={(width * 90) / 100}
                placeholder={'Last Name'}
                onChangeText={text => setLastName(text)}
                value={LastName}
              />
            </View>
            <View style={styles.InputView}>
              <InputText
                width={(width * 90) / 100}
                placeholder={'Email'}
                onChangeText={text => setEmail(text)}
                value={Email}
              />
            </View>
            <View style={styles.InputView}>
              <InputText
                width={(width * 90) / 100}
                placeholder={'Phone No'}
                onChangeText={text => setPhoneNo(text)}
                value={PhoneNo}
              />
            </View>
            <View style={styles.InputView}>
              <InputText
                width={(width * 90) / 100}
                placeholder={'Password'}
                onChangeText={text => setPassword(text)}
                value={Password}
              />
            </View>
            <View style={styles.InputView}>
              <InputText
                width={(width * 90) / 100}
                placeholder={'Confirm Password'}
                onChangeText={text => setConfirmPassword(text)}
                value={ConfirmPassword}
              />
            </View>

            <Text style={styles.MinimumCharText}>
              {' '}
              Min. 8 letters, 1 uppercase letter, 1 special character
            </Text>

            {/* ------------ Checkbox ---------- */}
            <View style={styles.ChecBoxView}>
              <CheckBox
                isChecked={isChecked}
                onClick={() => setisChecked(!isChecked)}
                checkBoxColor={appColors.RedPink}
                checkedCheckBoxColor={appColors.RedPink}
              />
              <View style={styles.AgreeView}>
                <Text>I agree to the </Text>
                <Text>Terms & Conditions</Text>
              </View>
            </View>

            {/* ---------- Save Account Button ---------- */}

            <Button
              Name={'Save Account'}
              backgroundColor={
                isAllValueAgree ? appColors.background : appColors.BtnColor
              }
              ImageButton={SaveAccountIcon}
              tintColor={isAllValueAgree ? 'black' : appColors.background}
              TextColor={isAllValueAgree ? 'black' : appColors.background}
              width={'100%'}
              OnPress={BackToNavigate}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSubView: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 20,
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
  InputView: {
    marginBottom: 20,
  },
  MinimumCharText: {
    width: '80%',
    fontSize: 14,
    fontWeight: '400',
    color: appColors.textGrayBlue,
    alignSelf: 'center',
  },
  ChecBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  AgreeView: {
    flexDirection: 'row',
    marginLeft: 25,
  },
});
