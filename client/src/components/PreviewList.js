import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import MessagePreview from './MessagePreview';
import { getAll } from '../Helper';

const PreviewList = screenProps => {
  console.log(screenProps, 'previewlist')
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAll().then(response => {
      const allPosts = response.data;
      setMessages(allPosts);
    });
  }, []);

  return (
    <ScrollView>
      <MessagePreview messages={messages} props={screenProps} setMessages={setMessages}/>
    </ScrollView>
  );
};

PreviewList.navigationOptions = {
  title: 'Nearby Messages',
};

export default PreviewList;
