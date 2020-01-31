import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Paragraph } from 'react-native-paper';
import MessageItem from '../components/MessageItem';

const MessagePreview = ({ messages }) =>
  messages &&
  messages.map((message, i) => {
    console.log(message);
    return (
      <Card style={styles.container} key={i}>
        <Card.Title
          title={message.title}
          subtitle={message.username}
          left={() => <Avatar.Text size={36} label={message.username[0]} />}
        />
        <MessageItem post={message} />
        <Divider />
        <Card.Content style={{ paddingTop: 10 }}>
          <Paragraph>{message.text}</Paragraph>
        </Card.Content>
        <Divider />
      </Card>
    );
  });

MessagePreview.navigationOptions = {
  title: 'title',
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default MessagePreview;
