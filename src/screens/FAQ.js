import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {appColors} from '../theme/Theme';
// ----------- importing amages and icons ----------
import backArrowIcon from '../assets/images/BackArrow.png';
import upArrow from '../assets/images/uparrow.png';
import downArrow from '../assets/images/downarrow.png';
import {height} from '../util/util';

export default function FAQ() {
  const navigation = useNavigation();
  const [firstList, setfirstList] = useState(false);
  const [secondList, setsecondList] = useState(false);
  const [thirdList, setthirdList] = useState(false);
  const [forthList, setforthList] = useState(false);
  const [fifthList, setfifthList] = useState(false);
  const FirstListFuc = () => {
    if (firstList == false) {
      setfirstList(true);
    }
    if (firstList == true) {
      setfirstList(false);
    }
  };
  const SecondListFunc = () => {
    if (secondList == false) {
      setsecondList(true);
    }
    if (secondList == true) {
      setsecondList(false);
    }
  };
  const ThirdListFunc = () => {
    if (thirdList == false) {
      setthirdList(true);
    }
    if (thirdList == true) {
      setthirdList(false);
    }
  };
  const FourthListFunc = () => {
    if (forthList == false) {
      setforthList(true);
    }
    if (forthList == true) {
      setforthList(false);
    }
  };
  const FifthListFunc = () => {
    if (fifthList == false) {
      setfifthList(true);
    }
    if (fifthList == true) {
      setfifthList(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.HeaderView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backArrowIcon} style={{width: 30, height: 15}} />
            </TouchableOpacity>
            <Text style={styles.PrivacyPolicyText}>FAQ</Text>
          </View>
          {/* -------------- List of FAQ -------------- */}

          <View
            style={{
              width: '100%',
              backgroundColor: appColors.background,
              paddingBottom: 30,
            }}>
            {/* ---  1st --- */}
            <View style={[styles.ListView, styles.BoxShadow]}>
              <Text style={styles.ListText}>1. What is a AEKS app? </Text>
              <TouchableOpacity onPress={FirstListFuc}>
                <Image
                  source={firstList ? upArrow : downArrow}
                  style={{width: 16, height: 16}}
                />
              </TouchableOpacity>
            </View>
            {firstList ? (
              <View style={[styles.showHideListView, styles.BoxShadow]}>
                <Text style={styles.showHidelistText}>
                  A delivery app is a mobile application that allows users to
                  order and receive a wide range of products, including food,
                  groceries, electronics, and more, delivered directly to their
                  doorstep.
                </Text>
              </View>
            ) : null}
            {/* ---  2nd --- */}
            <View style={[styles.ListView, styles.BoxShadow]}>
              <Text style={styles.ListText}>
                2. How do I download the delivery app?
              </Text>
              <TouchableOpacity onPress={SecondListFunc}>
                <Image
                  source={secondList ? upArrow : downArrow}
                  style={{width: 16, height: 16}}
                />
              </TouchableOpacity>
            </View>
            {secondList ? (
              <View style={[styles.showHideListView, styles.BoxShadow]}>
                <Text style={styles.showHidelistText}>
                  You can download the delivery app from your device's app
                  store, such as the Apple App Store for iOS devices or Google
                  Play Store for Android devices. Search for the app by name and
                  click "Install" or "Download."
                </Text>
              </View>
            ) : null}
            {/* ---  3rd --- */}
            <View style={[styles.ListView, styles.BoxShadow]}>
              <Text style={styles.ListText}>
                3. How does the delivery process work?
              </Text>
              <TouchableOpacity onPress={ThirdListFunc}>
                <Image
                  source={thirdList ? upArrow : downArrow}
                  style={{width: 16, height: 16}}
                />
              </TouchableOpacity>
            </View>
            {thirdList ? (
              <View style={[styles.showHideListView, styles.BoxShadow]}>
                <Text style={styles.showHidelistText}>
                  After selecting the desired items and completing the order, a
                  delivery driver is dispatched to the specified delivery
                  address. You can track the delivery in real-time and receive
                  notifications about the status of your order.
                </Text>
              </View>
            ) : null}
            {/* ---  4th --- */}
            <View style={[styles.ListView, styles.BoxShadow]}>
              <Text style={styles.ListText}>
                4. What types of products can I order through the app?
              </Text>
              <TouchableOpacity onPress={FourthListFunc}>
                <Image
                  source={forthList ? upArrow : downArrow}
                  style={{width: 16, height: 16}}
                />
              </TouchableOpacity>
            </View>
            {forthList ? (
              <View style={[styles.showHideListView, styles.BoxShadow]}>
                <Text style={styles.showHidelistText}>
                  Most delivery apps offer a wide variety of products, including
                  food from restaurants, groceries, alcohol, pharmacy items, and
                  even pet supplies. The available options may vary by location.
                </Text>
              </View>
            ) : null}
            {/* ---  5th --- */}
            <View style={[styles.ListView, styles.BoxShadow]}>
              <Text style={styles.ListText}>
                5. Is there a minimum order requirement?
              </Text>
              <TouchableOpacity onPress={FifthListFunc}>
                <Image
                  source={fifthList ? upArrow : downArrow}
                  style={{width: 16, height: 16}}
                />
              </TouchableOpacity>
            </View>
            {fifthList ? (
              <View style={[styles.showHideListView, styles.BoxShadow]}>
                <Text style={styles.showHidelistText}>
                  Minimum order requirements vary depending on the app and the
                  specific restaurant or store you are ordering from. Be sure to
                  check the app for any minimum order amounts for your chosen
                  items.
                </Text>
              </View>
            ) : null}
          </View>
        </ScrollView>
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
  ListView: {
    width: '100%',
    height: 55,
    backgroundColor: appColors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 8,
  },
  ListText: {
    fontSize: 16,
    fontWeight: '600',
    color: appColors.textGrayBlue,
  },
  BoxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  showHideListView: {
    width: '100%',
    backgroundColor: appColors.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  showHidelistText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
  },
});
