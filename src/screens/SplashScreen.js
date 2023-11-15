import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import splashlogo from "../../src/assets/images/Vector.png"
import { fontSize } from '../theme/Theme'
import Oswaldfont from "../assets/fonts/Oswald-Bold.ttf"

export default function SplashScreen() {
  return (
    <View style={{ flex: 1, }}>
      <LinearGradient colors={["#910021", "#DD0033", "#DD0033"]} style={style.mainContainer}>
        <View style={style.innerContainer}>
          <Image source={splashlogo} style={{width: 110, height: 128}}/>
          <Text style={style.LogoText}>AEKS</Text>
        </View>

        <View style={style.bottomTextview}> 
          <Text style={style.bottomText}>National Postal Operator</Text>
        </View>


      </LinearGradient>
    </View>
  )
}


// ------------------   Style Sheet  ---------------------

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    width: 150,
    height: 330,
    alignItems:"center",
  },
  LogoText: {
    fontSize: fontSize.title,
    fontWeight:"bold",
    color:"#FFFFFFC7",
    lineHeight: 70,
    paddingTop: 20
  },
  bottomTextview: {
  position:"absolute",
  bottom: 50,
  alignSelf:"center"
  },
  bottomText: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 22,
  }
})