import React, { Component, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { TextInput } from 'react-native-paper';

export default function NewPostScreen() {
  const [title, setTitle] = useState('');
  return (
    <ScrollView style={styles.container}>
      <TextInput
        label='Title'
        value={title}
        onChangeText={title => setTitle({ title })}
      />
    </ScrollView>
  );
}

NewPostScreen.navigationOptions = {
  title: 'New Post',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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
