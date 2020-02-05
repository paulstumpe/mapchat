import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import Modal from 'react-native-modal';
import MessageItem from '../components/MessageItem';
import Profile from '../components/Profile';

const MessagePreview = ({ screenProps, messages, setMessages, focusedMessageId, setFocusedMessageId, resetPosts}) => {
  // console.log(messages, 'message preview 9');
  const [profileModal, toggleProfileModal] = useState(false);
  const [nextTick, setNextTick] = useState(0);
  const messagePreviewRestPosts = ()=>{
    resetPosts();
    setNextTick(nextTick+1);
  }
  return (
    messages &&
    messages.map((message, i) => {
      const { post_local, post_public, title, text, user } = message; 
      let {  username, name_first, name_last } = user;

      if (name_first.length === 0){
        name_first = 'not long enough'
      }
      if(name_last.length === 0){
        name_last = 'not long enough'
      }

      const initials = name_first[0] + name_last[0];

      return (
        <Card
          style={post_local ? styles.local : styles.global}
          onPress={() => {
            toggleProfileModal(true)
          }}
          // key={i}
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
          <MessageItem messages={messages} post={message} screenProps={screenProps} setMessages={setMessages} focusedMessageId={focusedMessageId} setFocusedMessageId={focusedMessageId} resetPosts={resetPosts} messagePreviewRestPosts={messagePreviewRestPosts}/>
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
