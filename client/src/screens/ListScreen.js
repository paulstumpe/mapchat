import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import MessagePreview from '../components/MessagePreview';
import { getAll } from '../Helper';
import { useFocusEffect } from 'react-navigation-hooks';

const ListScreen = screenProps => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAll().then(response => {
      const allPosts = response.data;
      setMessages(allPosts);
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.debug('screen takes focus');
      getAll().then(response => {
        const allPosts = response.data;
        setMessages(allPosts);
      });
      //component did unmount
      return () => {
        console.debug('screen loses focus');
      };
    }, []),
  );

  return (
    <ScrollView>
      <MessagePreview messages={messages} />
    </ScrollView>
  );
};

ListScreen.navigationOptions = {
  title: 'Nearby Messages',
};

export default ListScreen;
