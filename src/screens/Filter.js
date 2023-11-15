import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../theme/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import Checkboxes from '../component/Checkboxes';
import DatePicker from 'react-native-date-picker';
import Button from '../component/Button';
// ----------- Importing Images and Icons -----------
import CrossIcon from '../assets/images/CrossIcon.png';
import {useNavigation} from '@react-navigation/native';
import DatePickIcon from '../assets/images/DatePickImage.png';

export default function Filter() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [FirstDate, setFirstDate] = useState('');

  const [SecondDate, setSecondDate] = useState(new Date());
  const [SecondOpen, setSecondOpen] = useState(false);
  const [FinalSecondDate, setFinalSecondDate] = useState('');

  const DisplayFirstDate = date => {
    const FinalFirstDate = date.toString();
    setFirstDate(FinalFirstDate);
  };

  const DisplaySecondDate = date => {
    const ourSecondDate = date.toString();
    setFinalSecondDate(ourSecondDate);
  };

  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.MainView}>
            <View style={styles.FilterTopView}>
              <Text style={styles.FilterText}>Filter</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={CrossIcon} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>

            <Text style={styles.TypeText}>Type</Text>

            {/* -------------- CHeckBoxes ------------- */}
            <Checkboxes />
            {/* ------------- Time Period ---------- */}
            <Text style={styles.TimePeriod}>Time Period</Text>
            <View style={[styles.DatePickView, styles.BoxShadow]}>
              <Text style={styles.DateText}>{FirstDate}</Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Image source={DatePickIcon} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
            <View style={[styles.DatePickView, styles.BoxShadow]}>
              <Text style={styles.DateText}>{FinalSecondDate}</Text>
              <TouchableOpacity onPress={() => setSecondOpen(true)}>
                <Image source={DatePickIcon} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>

            {/* -------------- Date Picker ------------- */}
            <>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                  // console.log(typeof date);
                  DisplayFirstDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </>

            <>
              <DatePicker
                modal
                open={SecondOpen}
                date={SecondDate}
                onConfirm={SecondDate => {
                  setSecondOpen(false);
                  setSecondDate(SecondDate);
                  // console.log(typeof date);
                  DisplaySecondDate(SecondDate);
                }}
                onCancel={() => {
                  setSecondOpen(false);
                }}
              />
            </>
            {/* ---------------- Done Button ----------------- */}
            <View style={[styles.btnView, styles.BoxShadow]}>
              <Button Name={'Done'} OnPress={() => navigation.goBack()} />
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
  TypeText: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: '700',
    color: appColors.textGrayBlue,
    marginBottom: 40,
  },
  TimePeriod: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: '600',
    color: appColors.textGrayBlue,
    marginBottom: 20,
  },
  DatePickView: {
    width: '100%',
    height: 55,
    backgroundColor: appColors.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(195, 195, 195)',
    marginBottom: 20,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
  },
  DateText: {
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: 10,
  },
  BoxShadow: {
    shadowColor: '#2d2d2d',
    shadowOffset: {
      width: 1,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  btnView: {
    marginTop: 100,
    marginBottom: 30,
    elevation: 8,
  },
});
