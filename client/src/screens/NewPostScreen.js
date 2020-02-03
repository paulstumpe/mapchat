import React, { useState, useCallback } from 'react';
import { View, ScrollView, StyleSheet, us } from 'react-native';
import { Button, Title, TextInput, Switch, Divider } from 'react-native-paper';
import { postMessageHelper } from '../Helper';
import { useNavigation, useNavigationParam, useFocusEffect } from 'react-navigation-hooks'
// import { useFocusEffect } from '@react-navigation/native';



export default function NewPostScreen({ screenProps, navigation} ) {
  
  const username = screenProps.username;
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [anon, setAnon] = useState(false);
  const [global, setGlobal] = useState(false);
  const [comments, setComments] = useState(true);
  // if (navigation.state.params.longitude){
  //   setOtherLocation(true);
  // }
  const buttonPress = ()=>{
      console.log('buttonpressed newpostScreen.js')
      screenProps.otherLocationObj.setOtherLocation(false);
  }
  useFocusEffect(useCallback(() => {
    console.debug("screen takes focus");
    //component did unmount
    return () => {

      console.debug("screen loses focus")
    };
  }, []));

  const clearFields = () => {
    setTitle('');
    setLocation('');
    setMessage('');
  };

  const postMessage = () => {
    let postInput = {title, message, anon, global, comments};
    let userId = 1;
    //todo hardcoded, fix after create profile screen
    let toPass = {
      longitude: screenProps.location.coords.longitude,
      latitude: screenProps.location.coords.latitude
    }
    if (screenProps.otherLocationObj.otherLocation){
      toPass.longitude = navigation.state.params.longitude;
      toPass.latitude = navigation.state.params.latitude;
    }
    postMessageHelper(postInput, toPass, screenProps.user.id)
    .then((res)=>{
      console.log(res, 'message posted successfully PostMessageHelper newPostScreenJS')
    })
    console.log(
      `User - ${username}, Title - ${title}, Location - ${location}, Message - ${message}`,
    );

    clearFields();
  };

  return (
    <ScrollView style={styles.container}>
      <Title>{username}</Title>
      <View>
        <TextInput
          label='Title'
          placeholder='title'
          mode='outlined'
          value={title}
          onChangeText={title => setTitle(title)}
        />
        <Button
          label={navigation.state.params.latitude ? 'Use current Location instead?':'Current Location'}
          mode='outlined'
          onPress={buttonPress}>{screenProps.otherLocationObj.otherLocation ? 'Use current Location instead?':'Current Location'}
        </Button>
        <TextInput
          label='Message'
          placeholder='message'
          mode='outlined'
          multiline={true}
          numberOfLines={6}
          value={message}
          onChangeText={message => setMessage(message)}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Title style={{ padding: 5 }}>Anonymous</Title>
          <Switch
            value={anon}
            style={{ justifyContent: 'flex-end' }}
            onValueChange={() => setAnon(!anon)}
          />
        </View>
        <Divider />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Title style={{ padding: 5 }}>Global</Title>
          <Switch
            value={global}
            style={{ justifyContent: 'flex-end' }}
            onValueChange={() => setGlobal(!global)}
          />
        </View>
        <Divider />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Title style={{ padding: 5 }}>Comments On</Title>
          <Switch
            value={comments}
            style={{ justifyContent: 'flex-end' }}
            onValueChange={() => setComments(!comments)}
          />
        </View>
        <Divider />
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
    marginTop: 10,
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
