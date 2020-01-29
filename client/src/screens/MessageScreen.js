import React from 'react';
import { View } from 'react-native';
import MessageItem from '../components/MessageItem';

const MessageScreen = screenProps => {
  return (
    <View>
      <MessageItem screenProps={screenProps} />
    </View>
  );
};

MessageScreen.navigationOptions = {
  title: 'Message',
};

export default MessageScreen;
