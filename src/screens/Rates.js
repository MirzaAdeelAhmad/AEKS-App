import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Appearance,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {appColors} from '../theme/Theme';
// --------- importing imaages and logos ----------
import BackArrowIcon from '../assets/images/BackArrow.png';
import CircleIcon from '../assets/images/Circle.png';
import LocationIcon from '../assets/images/LocationSign.png';
import PlusIcon from '../assets/images/PlusIcon.png';
import MinusIcon from '../assets/images/Minusicon.png';
import YellowBoxIcon from '../assets/images/YellowBox.png';
import Button from '../component/Button';

export default function Rates() {
  const navigation = useNavigation();
  const [Value, setValue] = useState(1);
  const IncreaseValue = () => {
    setValue(Value + 1);
  };
  const DecreaseValue = () => {
    if (Value >= 1) {
      setValue(Value - 1);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.RatesTopView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={BackArrowIcon} />
            </TouchableOpacity>
            <Text style={styles.RateText}>Rates</Text>
          </View>

          <View
            style={[
              {
                width: '85%',
                alignSelf: 'center',
                marginTop: 20,
              },
              styles.BoxShadow,
            ]}>
            <Text style={{fontSize: 18, paddingBottom: 5}}>Origion</Text>
            <View style={styles.OrigioView}>
              <Image source={CircleIcon} style={{width: 17, height: 17}} />
              <Text style={styles.OriginText}>United States Of America</Text>
            </View>
          </View>

          <View
            style={[
              {
                width: '85%',
                alignSelf: 'center',
                marginTop: 20,
                elevation: 10,
              },
              styles.BoxShadow,
            ]}>
            <Text style={{fontSize: 18, paddingBottom: 5}}>Destination</Text>
            <View style={styles.OrigioView}>
              <Image
                source={LocationIcon}
                style={{width: 15, height: 20, tintColor: appColors.RedPink}}
              />
              <Text style={styles.OriginText}>Albama, Barmingham</Text>
            </View>
          </View>

          <View
            style={[
              {
                width: '85%',
                alignSelf: 'center',
                marginTop: 20,
                paddingBottom: 30,
              },
              styles.BoxShadow,
            ]}>
            <Text style={{fontSize: 18, paddingBottom: 5}}>Weight (KG) </Text>
            <View style={styles.WeightView}>
              <TouchableOpacity onPress={DecreaseValue}>
                <Image source={MinusIcon} style={{width: 35, height: 35}} />
              </TouchableOpacity>
              <Text style={styles.WeightText}>{Value} (kg)</Text>
              <TouchableOpacity onPress={IncreaseValue}>
                <Image source={PlusIcon} style={{width: 35, height: 35}} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.DimensionText}>Set Dimensions</Text>
          <View style={[styles.DimensionBox, styles.BoxShadow]}>
            <View>
              <Text>Height</Text>
              <Text>150cm</Text>
            </View>
            <View style={styles.YellowboxView}>
              <View>
                <Text>Long</Text>
                <Text>143cm</Text>
              </View>
              <Image
                source={YellowBoxIcon}
                style={{width: 110, height: 120, margin: 30}}
              />
              <View>
                <Text>Width</Text>
                <Text>70cm</Text>
              </View>
            </View>
            <View>
              <Text>Volume</Text>
              <Text>70000</Text>
            </View>
          </View>

          <View style={[styles.PriceBox, styles.BoxShadow]}>
            <View style={styles.PriceInnerBox}>
              <View>
                <Text style={styles.PackagePrice}>Package Price</Text>
                <Text style={styles.Price}> $ 4500</Text>
              </View>
              <TouchableOpacity style={styles.ButtonView}>
                <Text style={styles.ButtonText}>Action</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  RatesTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  RateText: {
    fontSize: 22,
    fontWeight: '700',
    color: appColors.textGrayBlue,
    paddingLeft: 20,
  },
  OrigioView: {
    width: '100%',
    backgroundColor: appColors.background,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 10,
  },
  OriginText: {
    fontSize: 16,
    color: appColors.textgray,
    paddingVertical: 20,
    paddingLeft: 10,
  },
  WeightView: {
    width: '100%',
    backgroundColor: appColors.background,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
  },
  WeightText: {
    fontSize: 18,
    color: appColors.textGrayBlue,
    fontWeight: '600',
    paddingVertical: 25,
    paddingLeft: 10,
  },
  BoxShadow: {
    shadowColor: '#161616',
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  DimensionText: {
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 10,
    fontSize: 18,
    color: 'black',
  },
  DimensionBox: {
    backgroundColor: appColors.background,
    width: '100%',
    height: 300,
    marginBottom: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  YellowboxView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  PriceBox: {
    backgroundColor: appColors.background,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PriceInnerBox: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PackagePrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: appColors.textGrayBlue,
  },
  Price: {
    fontSize: 20,
    fontWeight: '600',
    color: appColors.RedPink,
  },

  ButtonView: {
    width: '60%',
    height: 60,
    backgroundColor: appColors.BtnColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: appColors.background,
  },
});
