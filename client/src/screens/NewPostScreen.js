import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Text, TextInput, Switch } from 'react-native-paper';
import { postMessageHelper } from '../Helper';

export default function NewPostScreen({ screenProps }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [anon, setAnon] = useState(false);
  const [global, setGlobal] = useState(false);
  const [comments, setComments] = useState(true);

  const clearFields = () => {
    setTitle('');
    setLocation('');
    setMessage('');
  };

  const postMessage = () => {
    postMessageHelper({ title, message }, screenProps.coords)
      .then(data => {
        data;
        console.log('success', data);
      })
      .catch(err => {
        console.log(err);
      });
    clearFields();
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          label='Title'
          placeholder='title'
          mode='outlined'
          value={title}
          onChangeText={title => setTitle(title)}
        />
        <TextInput
          label='Current Location'
          placeholder='location'
          mode='outlined'
          value={location}
          onChangeText={location => setLocation(location)}
        />
        <TextInput
          label='Message'
          placeholder='message'
          mode='outlined'
          multiline={true}
          numberOfLines={6}
          value={message}
          onChangeText={message => setMessage(message)}
        />
        <Switch value={anon} onValueChange={() => setAnon(!anon)} />
        <Switch value={global} onValueChange={() => setGlobal(!global)} />
        <Switch value={comments} onValueChange={() => setComments(!comments)} />
        <Button
          icon='send'
          mode='contained'
          style={{
            margin: 10,
            height: 50,
          }}
          onPress={() => postMessage()}
        >
          Drop Message
        </Button>
      </View>
    </ScrollView>
  );
}

NewPostScreen.navigationOptions = {
  title: 'New Post',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
