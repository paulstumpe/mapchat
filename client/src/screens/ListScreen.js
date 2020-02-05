import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import MessagePreview from '../components/MessagePreview';
import { getAll } from '../Helper';
import { useFocusEffect } from 'react-navigation-hooks'

const ListScreen = ({screenProps}) => {
  const [messages, setMessages] = useState([]);
  const [focusedMessageId, setFocusedMessageId] = useState(0);
  const [tick,setTick] = useState(0);
  const resetPosts = ()=>{
    getAll().then(response => {
      const allPosts = response.data;
      setMessages(allPosts);
      console.log('resetPosts called listscreen.js')
      setTick(tick+1)
    });
  }
  
  console.log('rendered')
  useFocusEffect(useCallback(() => {
    console.debug("screen takes focus");
    resetPosts();
    //component did unmount
    return () => {

      console.debug("screen loses focus")
    };
  }, [setTick]));

  return (
    <ScrollView>
      <MessagePreview 
        messages={messages} 
        screenProps={screenProps} 
        setMessages={setMessages} 
        focusedMessageId= {focusedMessageId} 
        setFocusedMessageId={setFocusedMessageId}
        resetPosts={resetPosts}
      />
    </ScrollView>
  );
};

ListScreen.navigationOptions = {
  title: 'Nearby Messages',
};

export default ListScreen;
