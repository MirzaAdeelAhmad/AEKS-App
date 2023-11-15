import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {appColors} from '../theme/Theme';
import {useNavigation} from '@react-navigation/native';
import HomeOrderList from '../component/HomeOrderList';
// ---------- importing images nad icons ----------
import BackArrowIcon from '../assets/images/BackArrow.png';
import FilterIcon from '../assets/images/Filter.png';

export default function Order() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.RatesTopView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={BackArrowIcon} />
              </TouchableOpacity>
              <Text style={styles.RateText}>Orders</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
              <Image source={FilterIcon} style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>

          {/* ----------------- Orders ------------------ */}
          <View style={{width: '90%', alignSelf: 'center', paddingBottom: 50}}>
            <HomeOrderList OrderID={'MK803739472434'} OredrPlace={'Deliverd'} />
            <HomeOrderList
              OrderID={'RKI92549202363'}
              OredrPlace={'Recived by customer'}
            />
            <HomeOrderList
              OrderID={'LWOS9462746202'}
              OredrPlace={'In delivery'}
            />
            <HomeOrderList
              OrderID={'OWH9343902632'}
              OredrPlace={'In delivery'}
            />
            <HomeOrderList
              OrderID={'QODK9295492153'}
              OredrPlace={'In delivery'}
            />
            <HomeOrderList
              OrderID={'OWH9343902632'}
              OredrPlace={'Recived by customer'}
            />
            <HomeOrderList
              OrderID={'QODK9295492153'}
              OredrPlace={'Recived by customer'}
            />
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
    justifyContent: 'space-between',
  },
  RateText: {
    fontSize: 22,
    fontWeight: '700',
    color: appColors.textGrayBlue,
    paddingLeft: 20,
  },
});
