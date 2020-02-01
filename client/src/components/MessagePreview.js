import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import Modal from 'react-native-modal';
import MessageItem from '../components/MessageItem';
import Profile from '../components/Profile';

const MessagePreview = ({ messages }) => {
  const [profileModal, toggleProfileModal] = useState(false);

  return (
    messages &&
    messages.map((message, i) => {
      console.log(message);
      return (
        <Card
          style={message.post_local ? styles.local : styles.global}
          onPress={() => toggleProfileModal(true)}
          key={i}
        >
          <Card.Title
            title={message.title}
            subtitle={message.user ? message.user.username : message.username}
            left={() => (
              <Avatar.Text
                style={styles.avatar}
                color='#2B4162'
                size={48}
                label={
                  message.user ? message.user.username[0] : message.username[0]
                }
              />
            )}
          />
          <MessageItem post={message} />
          <Modal
            isVisible={profileModal}
            onBackButtonPress={() => toggleProfileModal(false)}
          >
            <Profile />
          </Modal>
        </Card>
      );
    })
  );
};

MessagePreview.navigationOptions = {
  title: 'title',
};

const styles = StyleSheet.create({
  local: {
    borderRadius: 10,
    padding: 10,
    paddingBottom: 10,
    margin: 3,
    backgroundColor: '#D7B377',
  },
  global: {
    borderRadius: 10,
    padding: 10,
    paddingBottom: 10,
    margin: 3,
    backgroundColor: '#385F71',
  },
  avatar: { backgroundColor: '#F5F0F6' },
});

export default MessagePreview;
