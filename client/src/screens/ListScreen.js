import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import MessagePreview from '../components/MessagePreview';
import {getAll} from '../Helper';


const messages = [
  {
    username: 'Zoidberg',
    title: 'Need a friend?',
    text:
      'Why not Zoidberg? I have so many things to say. They will take up more than one line.',
  },
  {
    username: 'Bender',
    title: 'Can it, meatbag',
    text: 'Bite my shiny metal ass',
  },
  {
    username: 'Professor Farnsworth',
    title: 'Bad news, nobody',
    text: `I still don't understand why you wouldn't let me graft a laser cannon on your chest, to crush those who disobey you! But I guess we're just two different people.`,
  },
];

const ListScreen = screenProps => {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    getAll()
      .then((response) => {
        const allPosts = response.data;
        // console.log(allPosts)
        setMessages(allPosts);
      })
    
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
