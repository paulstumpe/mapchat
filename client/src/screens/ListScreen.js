import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import MessagePreview from '../components/MessagePreview';
import { getAll } from '../Helper';

const ListScreen = screenProps => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getAll().then(response => {
      const allPosts = response.data;
      setMessages(allPosts);
    });
  }, []);

  return (
    <ScrollView>
      <MessagePreview messages={messages} />
    </ScrollView>
  );
};

ListScreen.navigationOptions = {
  title: 'List',
};

export default ListScreen;
