import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;
const Post = t.struct({
  title: t.String,
  text: t.String,
});
const options = {
  fields: {
    title: {
      placeholder: 'Title',
    },
    text: {
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            height: 150,
            textAlignVertical: 'top',
          },
          error: {
            ...Form.stylesheet.textbox.error,
            height: 150,
          },
        },
      },
    },
  },
};
const onPress = function () {
  // call getValue() to get the values of the form
  var value = refs.form.getValue();
  if (value) {
    // if validation fails, value will be null
    console.log(value); // value here is an instance of Person
  }
};
export default function MessageItemScreen() {
  return ( <ScrollView style = { styles.container} >
    <Form refs = "form" type = { Post } options = { options }/> 
    <TouchableHighlight style = { styles.button } onPress = { onPress } underlayColor = "#99d9f4" >
    <Text style = { styles.buttonText }> Save </Text> 
    </TouchableHighlight> 
    </ScrollView>
  );
}
MessageItemScreen.navigationOptions = {
  title: 'Message Item',
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