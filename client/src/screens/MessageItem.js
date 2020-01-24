import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import t from 'tcomb-form-native'; // 0.6.9
// import * as React from 'react';
import { List } from 'react-native-paper';

const MessageItem = () => ( <
  List.Item title = "First Item"
  description = "Item description"
  left = {
    props => < List.Icon {
      ...props
    }
    icon = "folder" / >
  }
  />
);

export default MessageItem;
