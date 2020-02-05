import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Divider,
  Paragraph,
  Subheading,
  TextInput,
} from 'react-native-paper';
import Modal from 'react-native-modal';
import { getOne, postComment, getAll } from '../Helper';

const CommentsMaker = ({ commentProp, i})=>{
  const [comment, setComment] = useState(commentProp)
  return (
    <Card style={{ marginTop: 10 }} >
      <Subheading> {comment.user.username}</Subheading>
      <Divider />
      <Card.Content style={{ paddingTop: 10 }}>
        <Paragraph>{comment.text}</Paragraph>
      </Card.Content>
    </Card>
  );
}
export default CommentsMaker;