import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import MessagePreview from './MessagePreview';
import { getAll } from '../Helper';

const PreviewList = ({screenProps}) => {
  console.log(screenProps, 'previewlist')
  const [messages, setMessages] = useState([]);
  const [focusedMessageId, setFocusedMessageId] = useState(0);
  const resetPosts = () => {
    getAll().then(response => {
      const allPosts = response.data;
      setMessages(allPosts);
      console.log('resetPosts called listscreen.js')
      setTick(tick + 1)
    });
  }
  useEffect(() => {
    getAll().then(response => {
      const allPosts = response.data;
      setMessages(allPosts);
    });
  }, []);

  return (
    <ScrollView>
      <MessagePreview 
      messages={messages} 
      screenProps={screenProps} 
      setMessages={setMessages}
      focusedMessageId={focusedMessageId}
      setFocusedMessageId={setFocusedMessageId}
      resetPosts={resetPosts}
      />
    </ScrollView>
  );
};

PreviewList.navigationOptions = {
  title: 'Nearby Messages',
};

export default PreviewList;
