import React, { Component, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Divider,
  Headline,
  Paragraph,
  Subheading,
  TextInput,
  Title,
} from 'react-native-paper';

const message = {
  username: 'Fry',
  title: 'Delivery',
  text: 'Pizza delivery for I.C. Weiner',
};

const comments = [
  { username: 'Bender', text: 'Bite my shiny metal ass' },
  { username: 'Professor', text: 'Good news everyone' },
  { username: 'Leela', text: `That isn't a real name, Fry` },
];

const MessageItem = () => {
  const [comment, setComment] = useState('');
  const postComment = () => {
    // postMessageHelper({ title, message }, screenProps.coords)
    //   .then(data => {
    //     data;
    //     console.log('success', data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log(comment);
    setComment('');
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior='position' enabled>
      <Card>
        <Card.Title
          title={message.username}
          subtitle={message.title}
          left={props => <Avatar.Text size={48} label='PJF' />}
        />
        <Divider />
        <Card.Content style={{ paddingTop: 10 }}>
          <Paragraph>{message.text}</Paragraph>
        </Card.Content>
      </Card>
      {comments &&
        comments.map(comment => (
          <Card style={{ marginTop: 10 }}>
            <Subheading> {comment.username}</Subheading>
            <Divider />
            <Card.Content style={{ paddingTop: 10 }}>
              <Paragraph>{comment.text}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      <Card
        style={{
          borderRadius: 10,
          position: 'relative',
          zIndex: 2,
          marginTop: 10,
        }}
      >
        <Card.Content>
          <TextInput
            label='Comment'
            placeholder='comment'
            mode='outlined'
            multiline={true}
            numberOfLines={3}
            value={comment}
            onChangeText={comment => setComment(comment)}
          />
          <Button
            icon='send'
            mode='contained'
            style={{
              marginTop: 10,
              marginRight: 220,
              height: 40,
            }}
            onPress={() => postComment()}
          >
            Comment
          </Button>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
};

MessageItem.navigationOptions = {
  title: message.title,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default MessageItem;
