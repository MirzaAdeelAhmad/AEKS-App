import { View, Text, Image } from 'react-native'
import React from 'react'
import logibcubeimage from "../assets/images/loginCube.png"

export default function LoginSignTitle({TextOne,TextTwo,TextThree,TextFour}) {
  return (
    <View style={{flex:1, justifyContent:"flex-end", alignItems:"center"}}>
    <View style={{width: "75%", padding:10}}>
    <Image source={logibcubeimage}/>
    <Text style={{fontSize: 32, lineHeight:44, fontWeight:"bold", color:"#35383C", paddingTop:10}}>{TextOne}</Text>
    <Text style={{fontSize: 32, lineHeight:44, fontWeight:"bold", color:"#35383C"}}>{TextTwo}</Text>
    <Text style={{fontSize: 20, lineHeight:25, paddingTop:10}}>{TextThree}</Text>
    <Text style={{fontSize: 20, lineHeight:25,paddingBottom:25}}>{TextFour}</Text>
    </View>
</View>
  )
}