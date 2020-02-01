import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import Modal from 'react-native-modal';
import MessageItem from '../components/MessageItem';
import Profile from '../components/Profile';

const MessagePreview = ({ messages }) => {
  // console.log(messages, 'message preview 9');
  const [profileModal, toggleProfileModal] = useState(false);

  return (
    messages &&
    messages.map((message, i) => {
      const { post_local, post_public, title, text, user } = message;
      const { name_first, name_last, username } = user;
      const initials = name_first[0] + name_last[0];

      return (
        <Card
          style={post_local ? styles.local : styles.global}
          onPress={() => toggleProfileModal(true)}
          key={i}
        >
          <Card.Title
            title={title}
            subtitle={username}
            left={() => (
              <Avatar.Text
                style={styles.avatar}
                color='#2B4162'
                size={48}
                label={initials}
              />
            )}
          />
          <MessageItem post={message} />
          <Modal
            isVisible={profileModal}
            onBackButtonPress={() => toggleProfileModal(false)}
          >
            <Profile toggleProfileModal={toggleProfileModal} />
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
