import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// ------------ Importing Screens -------------
import SplashScreen from '../screens/SplashScreen';
import OnBoarding from '../screens/Onboarding';
import LoginTwo from '../screens/LoginTwo';
import LoginThree from '../screens/LoginThree';
import LoginSuccess from '../screens/LoginSuccess';
import Home from '../screens/Home';
import OrderMap from '../screens/OrderMap';
import OrderSent from '../screens/OrderSent';
import OrderRecieved from '../screens/OrderRecieved';
import Message from '../screens/Message';
import Chats from '../screens/Chats';
import Rates from '../screens/Rates';
import Order from '../screens/Order';
import Filter from '../screens/Filter';
import Menu from '../screens/Menu';
import Information from '../screens/Information';
import AccountInformation from '../screens/AccountInformation';
import EditAccountInformation from '../screens/EditAccountInformation';
import Support from '../screens/Support';
import FAQ from '../screens/FAQ';
import Setting from '../screens/Setting';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [splashTime, setsplashTime] = useState(true);
  const [loginSuccess, setloginSuccess] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setsplashTime(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashTime ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginTwo"
          component={LoginTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginThree"
          component={LoginThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginSuccess"
          component={LoginSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Back"
          component={OrderMap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderSent"
          component={OrderSent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderRecieved"
          component={OrderRecieved}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={({route}) => ({
            title: route.params.UserName,
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="Rates"
          component={Rates}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Information"
          component={Information}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountInformation"
          component={AccountInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditAccountInformation"
          component={EditAccountInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
