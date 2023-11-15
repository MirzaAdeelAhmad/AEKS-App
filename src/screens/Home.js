import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from '../theme/Theme';
import HomeOrderList from '../component/HomeOrderList';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Notification from './Notification';
import NotificationMessege from '../component/NotificationMessege';
// ----------------  Images And Icons --------------
import slashesIcon from '../assets/images/SlashesImage.png';
import box from '../assets/images/Box.png';
import bellicone from '../assets/images/BellImage.png';
import TrackingImage from '../assets/images/Tracking.png';
import RatesImage from '../assets/images/Rates.png';
import notificationIcon from '../assets/images/NotiFicationIcon.png';

const {height, width} = Dimensions.get('screen');

export default function Home() {
  const [OrderID, setOrderID] = useState('TZ839342845293');
  const [OrderPosition, setOrderPosition] = useState('In delivery');
  const [ShowMotification, setShowMotification] = useState(false);

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <View style={{width: '100%', height: (height * 38) / 100}}>
        <LinearGradient
          colors={['#910021', '#DD0033', '#DD0033']}
          style={{flex: 1}}>
          <View
            style={{
              width: '90%',
              height: '100%',
              alignSelf: 'center',
            }}>
            <View style={styles.headerIconsView}>
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Image source={slashesIcon} style={{width: 25, height: 25}} />
              </TouchableOpacity>
              <Image source={box} style={{width: 40, height: 45}} />
              <TouchableOpacity onPress={() => setShowMotification(true)}>
                <Image source={bellicone} style={{width: 25, height: 25}} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 23,
                fontWeight: '500',
                lineHeight: 26,
                color: 'white',
              }}>
              Send a Package
            </Text>
            <Text style={{fontSize: 12, color: 'white', paddingTop: 5}}>
              Hello, Natalya Undergrowth
            </Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Search"
                style={styles.input}
                placeholderTextColor={'rgb(237, 237, 237)'}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
      {/* ------------------------------------------------------- */}

      <View style={{width: '100%', backgroundColor: appColors.background}}>
        <View
          style={{
            width: '90%',
            height: '100%',
            backgroundColor: appColors.background,
            alignSelf: 'center',
          }}>
          <View
            style={{
              marginTop: 65,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Shipments</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>

          {/* ----------------  Orders List  ---------------- */}

          <View
            style={{
              paddingTop: 30,
              paddingBottom: 300,
            }}>
            <ScrollView>
              <HomeOrderList
                OrderID={OrderID}
                OredrPlace={OrderPosition}
                OnPress={() =>
                  navigation.navigate('Back', {
                    OrderID: OrderID,
                    OrderPosition: OrderPosition,
                  })
                }
              />
              <HomeOrderList
                OrderID={'MK803739472434'}
                OredrPlace={'Deliverd'}
              />
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
            </ScrollView>
          </View>
        </View>
      </View>

      {/* ----------------- Horizental Boxes absolute -------------- */}
      <View style={styles.AllBoxView}>
        <TouchableOpacity style={styles.BoxesView}>
          <Image source={TrackingImage} style={{marginBottom: 10}} />
          <Text style={{color: appColors.textGrayBlue}}>Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BoxesView}
          onPress={() => navigation.navigate('Rates')}>
          <Image source={RatesImage} style={{marginBottom: 10}} />
          <Text style={{color: appColors.textGrayBlue}}>Rates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BoxesView}
          onPress={() => navigation.navigate('Order')}>
          <Image
            source={box}
            style={{marginBottom: 10, tintColor: 'rgb(219, 219, 219)'}}
          />
          <Text style={{color: appColors.textGrayBlue}}>Order</Text>
        </TouchableOpacity>
      </View>

      {/* ------------------- Notificatin Area ------------------- */}
      {ShowMotification ? (
        <View
          style={{
            width: '100%',
            height: '70%',
            position: 'absolute',
            top: 50,
          }}>
          <View style={styles.NotificationCornerView}>
            <View style={styles.SubNotificationCornerView}>
              <TouchableOpacity onPress={() => setShowMotification(false)}>
                <Image
                  source={notificationIcon}
                  style={{width: '100%', height: '100%'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.NotificationView, styles.BoxShadow]}>
            <ScrollView>
              <NotificationMessege OredrName={'You have a new order!'} />
              <NotificationMessege OredrName={'Order is ready for delivery!'} />
              <NotificationMessege OredrName={'You have a new order!'} />
              <NotificationMessege OredrName={'YOrder delivered!'} />
              <NotificationMessege OredrName={'Thank you for joining Ally!'} />
              <NotificationMessege OredrName={'You have a new order!'} />
              <NotificationMessege OredrName={'Order is ready for delivery!'} />
            </ScrollView>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  headerIconsView: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: Platform.OS === 'ios' ? 50 : 10,
  },
  inputView: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.297)',
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
  },
  input: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
  },

  AllBoxView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: (height * 32.5) / 100,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  BoxesView: {
    width: '25%',
    height: 90,
    backgroundColor: appColors.background,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NotificationView: {
    alignSelf: 'center',
    width: '90%',
    height: '80%',
    backgroundColor: appColors.background,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 19,
  },
  NotificationCornerView: {
    width: '90%',
    height: 90,
    alignSelf: 'center',
  },
  SubNotificationCornerView: {
    width: 70,
    height: 100,
    backgroundColor: appColors.background,
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  BoxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
