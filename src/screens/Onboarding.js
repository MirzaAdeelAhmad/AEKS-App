import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {appColors} from '../theme/Theme';
import LoginSignTitle from '../component/LoginSignTitle';
import {useNavigation} from '@react-navigation/native';
import InputText from '../component/InputText';
import Button from '../component/Button';
// -------------- importing images and logos --------------
import OnboardingBackall from '../assets/images/onboardingbackall.png';
import onboarding1 from '../assets/images/onboarding1.png';
import onboardingDot from '../assets/images/onboardingdot.png';
import loginCube from '../assets/images/loginCube.png';
import signinScan from '../assets/images/scanSignin.png';
import {width} from '../util/util';

// -------------  Slides Data  -------------
const Slides = [
  {
    id: 1,
    image: require('../assets/images/onboarding1.png'),
    title: 'Purchase Online !!',
    text: 'Lorem ipsum dolor sit amet consec, sed do eiusmod tempor ut labore',
  },
  {
    id: 2,
    image: require('../assets/images/onboarding2.png'),
    title: 'Purchase Online !!',
    text: 'Lorem ipsum dolor sit amet consec, sed do eiusmod tempor ut labore',
  },
  {
    id: 3,
    image: require('../assets/images/onboarding3.png'),
    title: 'Purchase Online !!',
    text: 'Lorem ipsum dolor sit amet consec, sed do eiusmod tempor ut labore',
  },
];

export default function OnBoarding() {
  const navigation = useNavigation();
  const ButtonLable = name => {
    return (
      <View style={{padding: 17}}>
        <Text style={{fontWeight: 700}}>{name}</Text>
      </View>
    );
  };

  const [ShowSlide, setShowSlide] = useState(false);
  if (!ShowSlide) {
    return (
      // -------------------  App Intro Slider ------------------
      <AppIntroSlider
        activeDotStyle={{backgroundColor: appColors.primary}}
        data={Slides}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1, backgroundColor: appColors.background}}>
              <View
                style={{
                  width: '100%',
                  height: '75%',
                  justifyContent: 'flex-end',
                }}>
                {/* ------------ Background Logos And Images view ---------- */}
                <View
                  style={{
                    width: '100%',
                    height: '80%',
                    alignItems: 'center',
                  }}>
                  <Image source={OnboardingBackall} />
                  <View style={styles.onboarding1Image}>
                    <Image source={item.image} />
                  </View>
                  <View style={styles.onboardingDotIamge}>
                    <Image source={onboardingDot} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 270,
                  height: '25%',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.purchseText}>{item.title}</Text>
                <Text style={styles.bottomText}>{item.text}</Text>
              </View>
            </View>
          );
        }}
        showSkipButton={true}
        renderNextButton={() => ButtonLable('Next')}
        renderSkipButton={() => ButtonLable('Skip')}
        renderDoneButton={() => ButtonLable('Done')}
        onDone={() => {
          setShowSlide(true);
        }}
      />
    );
  }

  // --------------  login signup screen --------------
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <LoginSignTitle
        TextOne={'Mobile'}
        TextTwo={'number'}
        TextThree={'Type you email or phone'}
        TextFour={'number to reset your password'}
      />
      <View
        style={{
          flex: 1,

          justifyContent: 'space-between',
        }}>
        <View>
          <InputText
            width={(width * 80) / 100}
            placeholder={'Enter Phone No'}
          />
          <Button
            Name={'ENTER'}
            width={'80%'}
            TextColor={'white'}
            backgroundColor={appColors.BtnColor}
            OnPress={() => navigation.navigate('LoginTwo')}
          />
        </View>

        <View style={{}}>
          <View
            style={{flexDirection: 'row', marginLeft: 40, paddingBottom: 70}}>
            <Text style={{fontSize: 18, paddingRight: 15}}>Sign in with</Text>
            <Image source={signinScan} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purchseText: {
    color: appColors.text,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  bottomText: {
    fontSize: 16,
    color: appColors.text,
    textAlign: 'center',
  },
  onboarding1Image: {
    width: '95%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: 130,
  },
  onboardingDotIamge: {
    position: 'absolute',
    right: 40,
    top: 10,
  },
});
