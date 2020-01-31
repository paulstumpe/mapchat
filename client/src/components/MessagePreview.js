import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
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
          left={() => (
            <Avatar.Text
              style={styles.avatar}
              size={36}
              label={message.username[0]}
            />
          )}
        />
        <MessageItem post={message} />
      </Card>
    );
  });

MessagePreview.navigationOptions = {
  title: 'title',
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    paddingBottom: 10,
    margin: 3,
    backgroundColor: '#D7B377',
  },
  avatar: { backgroundColor: '#385F71' },
});

export default MessagePreview;
