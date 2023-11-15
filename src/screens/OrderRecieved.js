import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { appColors } from '../theme/Theme'
import OrderSentComponent from '../component/OrderSentComponent'
// ------------- Importing Images and Icone ------------
import BackArrowIcon from "../assets/images/BackArrow.png"
import MessageIcon from "../assets/images/Messege.png"
import mapImage from "../assets/images/MapPic.png"
import AirplaneImg from "../assets/images/Airplane.png"
import LocationSignIcon from "../assets/images/LocationSign.png"
import DotsIcon from "../assets/images/Dots.png"

export default function OrderRecieved() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: appColors.background }}>
            <View style={{ width: "90%", alignSelf: "center", marginTop: 50, paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <Image source={BackArrowIcon} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>ID; 124589898895</Text>
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>Detail</Text>
                </View>
                <Image source={MessageIcon} />
            </View>
            <View style={{ width: "100%", height: 30, backgroundColor: appColors.LightGreen, justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                <Image source={AirplaneImg} />
                <Text style={{ fontSize: 15, color: appColors.background, paddingLeft: 10 }}>In delivery</Text>
            </View>
            {/* ----------------- Map ----------------- */}
            <View style={{ width: "100%", height: "60%", }}>
                <Image source={mapImage} style={{ width: "100%", height: "100%" }} />
            </View>

            <View style={{ width: "100%", height: "25%", position: "absolute", bottom: 0, backgroundColor: appColors.background, padding: 40, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <Text style={{ fontSize: 18, fontWeight: "600", paddingBottom: 20, color: appColors.textGrayBlue }}>Delivery Address</Text>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Image source={LocationSignIcon} />
                    <Text style={{ fontSize: 14, color: appColors.textgray, paddingLeft: 10 }}>Pickup:</Text>
                    <Text style={{ fontSize: 14, color: appColors.textGrayBlue }}> 1300 E Wilsum Ave, CA 91206</Text>
                </View>
                <View style={{ paddingLeft: 8 }}>
                    <Image source={DotsIcon} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={LocationSignIcon} />
                    <Text style={{ color: appColors.textgray, paddingLeft: 10 }}>Pickup:</Text>
                    <Text style={{ fontSize: 14, color: appColors.textGrayBlue }}> 1300 E Wilsum Ave, CA 91206</Text>
                </View>
            </View>
            {/* ------------------  Order Sent Component ---------------------- */}
            <OrderSentComponent Name={"Done"} OrderPosition={"Successfully pick up!"} onBtnPress={() => Navigation.navigate("Home")} />
        </View>
    )
}