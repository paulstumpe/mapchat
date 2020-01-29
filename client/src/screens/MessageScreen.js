import React, { Component, useState } from 'react';
import { View } from 'react-native';
import MessageItem from '../components/MessageItem';

const MessageScreen = screenProps => {
  // console.log(screenProps, 'XXX');
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
