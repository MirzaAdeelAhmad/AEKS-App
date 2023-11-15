import {View, Text, Image} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {appColors} from '../theme/Theme';
// ----------- Importing Images and Icons ----------
import SendIcon from '../assets/icons/Send.png';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Chats() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const BubbleStyle = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: appColors.RedPink,
          },
          left: {
            backgroundColor: appColors.background,
          },
        }}
        textStyle={{
          right: {
            color: 'white',
          },
        }}
      />
    );
  };

  const SendStyle = props => {
    return (
      <Send {...props}>
        <View>
          <Image
            source={SendIcon}
            style={{
              width: 25,
              height: 25,
              marginBottom: 10,
              marginRight: 20,
              tintColor: appColors.RedPink,
            }}
          />
        </View>
      </Send>
    );
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={BubbleStyle}
          alwaysShowSend
          renderSend={SendStyle}
          scrollToBottom
        />
      </SafeAreaView>
    </View>
  );
}
