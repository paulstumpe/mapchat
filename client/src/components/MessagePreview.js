import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import Modal from 'react-native-modal';
import MessageItem from '../components/MessageItem';
import Profile from '../components/Profile';

const MessagePreview = ({
  screenProps,
  messages,
  setMessages,
  focusedMessageId,
  resetPosts,
}) => {
  const [profileModal, toggleProfileModal] = useState(false);
  const [nextTick, setNextTick] = useState(0);

  const messagePreviewRestPosts = () => {
    resetPosts();
    setNextTick(nextTick + 1);
  };

  const { photoUrl } = screenProps;

  return (
    messages &&
    messages.map((message, i) => {
      const { post_local, post_public, title, text, user } = message;
      const { username, name_first, name_last } = user;

      if (name_first.length === 0) {
        name_first = 'not long enough';
      }
      if (name_last.length === 0) {
        name_last = 'not long enough';
      }
      return (
        <Card style={post_local ? styles.local : styles.global} key={i}>
          <Card.Title
            title={title}
            titleStyle={post_local ? styles.titleLocal : styles.titleGlobal}
            subtitle={username}
            subtitleStyle={post_local ? styles.titleLocal : styles.titleGlobal}
            left={() => (
              <Avatar
                size='large'
                rounded
                source={{ uri: photoUrl }}
                onPress={() => {
                  toggleProfileModal(true);
                }}
              />
            )}
          >
            <Image
              source={{ uri: photoUrl }}
              style={{ height: 50, width: 50 }}
            />
          </Card.Title>
          <Divider />
          <MessageItem
            messages={messages}
            post={message}
            screenProps={screenProps}
            setMessages={setMessages}
            focusedMessageId={focusedMessageId}
            setFocusedMessageId={focusedMessageId}
            resetPosts={resetPosts}
            messagePreviewRestPosts={messagePreviewRestPosts}
          />
          <Modal
            isVisible={profileModal}
            onBackButtonPress={() => toggleProfileModal(false)}
          >
            <Profile toggleProfileModal={toggleProfileModal} post={message} />
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
    color: '#F5F0F6',
    backgroundColor: '#385F71',
  },
  avatar: { backgroundColor: '#F5F0F6' },
  titleLocal: { color: '#2B4162', marginLeft: 30 },
  titleGlobal: { color: '#F5F0F6', marginLeft: 30 },
});
export default MessagePreview;
