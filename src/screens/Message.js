import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../theme/Theme';
import {useNavigation} from '@react-navigation/native';

const Users = [
  {
    id: 1,
    Name: 'Janney Doe',
    Image: require('../assets/ChatImaes/girl1.jpeg'),
    Time: '2 mints ago',
    Description:
      'Hi there, this is my test for a post of my social app react native',
  },
  {
    id: 2,
    Name: 'Stephen Hak',
    Image: require('../assets/ChatImaes/man3.webp'),
    Time: '11 mints ago',
    Description:
      'Hi there, this is my test for a post of my social app react native',
  },
  {
    id: 3,
    Name: 'Johan Bey',
    Image: require('../assets/ChatImaes/man1.jpeg'),
    Time: '45 mints ago',
    Description:
      'Hi there, this is my test for a post of my social app react native',
  },
  {
    id: 4,
    Name: 'Prity Zanta',
    Image: require('../assets/ChatImaes/girl2.jpeg'),
    Time: '5 hour ago',
    Description:
      'Hi there, this is my test for a post of my social app react native',
  },
  {
    id: 5,
    Name: 'Ken Obama',
    Image: require('../assets/ChatImaes/man2.jpeg'),
    Time: '3 days ago',
    Description:
      'Hi there, this is my test for a post of my social app react native',
  },
  {
    id: 6,
    Name: 'Angilana',
    Image: require('../assets/ChatImaes/girl3.jpeg'),
    Time: '4 days ago',
    Description:
      'Hi there, this is my test for a post of my social app react native',
  },
];

export default function Message() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: appColors.background}}>
      <FlatList
        data={Users}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 70,
                marginTop: 20,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.3,
              }}>
              <View>
                <Image
                  source={item.Image}
                  style={{width: 50, height: 50, borderRadius: 50}}
                />
              </View>
              <TouchableOpacity
                style={{
                  width: '80%',
                  marginLeft: 10,
                }}
                onPress={() =>
                  navigation.navigate('Chats', {UserName: item.Name})
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 3,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>
                    {item.Name}
                  </Text>
                  <Text>{item.Time}</Text>
                </View>
                <Text style={{color: appColors.textgray}}>
                  {item.Description}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
