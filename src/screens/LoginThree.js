import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { appColors } from '../theme/Theme'
import LoginSignTitle from '../component/LoginSignTitle'
import PinCodeBox from '../component/PinCodeBox'
import ResendButton from '../component/ResendButton'
import { useNavigation } from '@react-navigation/native'

export default function LoginThree() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: appColors.background }}>
            <View style={{ flex: 1, }}>
                <LoginSignTitle TextOne={"Type in"} TextTwo={"The Code"} TextThree={"We've sent a 6 digit code to"} TextFour={"your email/phone number"} />
            </View>
            {/* ----------------  Pin Box  --------------- */}
            <View style={{ flex: 1, }}>
                <View style={{ width: "100%", height: "50%", }}>
                    <PinCodeBox BorderWidth={2} BorderColor={appColors.primary} TextColor={appColors.textGrayBlue} firstPincode={"1"} secondPincode={"0"} thirdPincode={"7"} forthPincode={"3"} fifthPincode={"8"} sisthPincode={"5"} />
                    <Text style={{ fontSize: 18, color: appColors.primary, paddingLeft: 60, paddingTop: 15 }}>*Code is incorrect</Text>

                </View>

                <View style={{ width: "100%", height: "50%", }}>
                    <Text style={{ fontSize: 18, color: appColors.textGrayBlue, paddingLeft: 40, paddingTop: 20, paddingBottom: 10 }}>Didn't get the code</Text>
                    <ResendButton OnPress={() => navigation.navigate("LoginSuccess")} />
                </View>

            </View>
        </View>
    )
}