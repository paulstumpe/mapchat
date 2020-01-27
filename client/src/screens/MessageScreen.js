import React, { Component, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Card,
  Divider,
  Headline,
  Paragraph,
  TextInput,
  Title,
} from 'react-native-paper';

const message = {
  username: 'Fry',
  title: 'Delivery',
  text: 'Pizza delivery for I.C. Weiner',
};

const MessageScreen = () => (
  <View>
    <Card>
      <Card.Content>
        <Title style={styles.name}>{message.username}</Title>
        <Divider />
        <Paragraph>{message.text}</Paragraph>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <TextInput
          label='Comment'
          placeholder='comment'
          mode='outlined'
          multiline={true}
          numberOfLines={3}
          // value={message}
          // onChangeText={message => setMessage(message)}
        />
        <Button
          icon='send'
          mode='contained'
          style={{
            marginTop: 10,
            marginRight: 220,
            height: 40,
          }}
          // onPress={() => postMessage()}
        >
          Comment
        </Button>
      </Card.Content>
    </Card>
  </View>
);

MessageScreen.navigationOptions = {
  title: message.title,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default MessageScreen;
