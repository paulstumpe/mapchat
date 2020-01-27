import React, { Component, useState } from 'react';
import { View } from 'react-native';
import MessageItem from '../components/MessageItem';

const MessageScreen = props => {
  console.log(props);
  return (
    <View>
      <MessageItem />
    </View>
  );
};

MessageScreen.navigationOptions = {
  title: 'Message',
};

export default MessageScreen;
