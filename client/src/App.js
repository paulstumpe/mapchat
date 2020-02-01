import Expo, { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as Google from "expo-google-app-auth";
import axios from 'axios';
import { postUser } from './Helper'

import AppNavigator from './navigation/AppNavigator';
import { useScreens } from 'react-native-screens';

useScreens();
// import MessageItem from './components/MessageItem';


export default function App(props) {
  // console.log(props);
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [signedIn, setSignIn] = useState(false);
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [googleId, setGoogleId] = useState('');
  const [user, setUser] = useState({});
  
  //Authentication  
  const signIn = async () => {
      try {
        const result = await Google.logInAsync({
          androidClientId: "431692420645-mjhsg582ie1jq8d2hlvguccm4hlsgckj.apps.googleusercontent.com",
          scopes: ["profile", "email"]
        })
        if (result.type === "success") {
          console.log(result, 'line 33');
          setSignIn("true");
          setUsername(result.user.name);
          // setPhotoUrl(result.user.photoUrl)
          setGoogleId(result.user.id)
          console.log(username, googleId, signIn, '<==== state set!r')
          const userObj = {
            username: "",
            name_first: "",
            name_last: "",
            password: "",
            email: "",
            bio: "",
            status: "",
            public: true,
          }
          postUser(userObj)
          .then(({data})=>{
            setUser(data);
            console.log(data, 'success saving user')})
          .catch((err)=>{console.log(err, 'error saving user')})
          // axios.post()
        } else {
          console.log("cancelled")
        }
      } catch (e) {
        console.log("error", e)
      }

      return ( 
        <View style = {styles.container}> {signedIn ? ( 
          <LoggedInPage name = {name} photoUrl = {photoUrl}/>
          ) : ( 
          <LoginPage signIn = {signIn}/>
          )
        } </View>
      )
    }
    
    
  const [otherLocation, setOtherLocation] = useState('');
  const otherLocationObj = { otherLocation, setOtherLocation };
  const screenProps = { location, username, otherLocationObj, user };

  if (!username) {
    setUsername('Philip J. Fry');
  }
  // console.log(username);
  console.log(username, 'line 67');

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => {
          getLocationAsync().then(currentLocation =>
            setLocation(currentLocation)
          ).then(signIn());
          console.log('this works')
          return handleFinishLoading(setLoadingComplete);
        }}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
        <AppNavigator screenProps={screenProps} />
      </View>
    );
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return ( 
    <View style = {styles.container} >
      <Text style = {styles.header} > Welcome: {props.name} </Text> 
      <Image style = {styles.image} source = {{ uri: props.photoUrl}}/> 
    </View>
  )
}

async function getLocationAsync() {
  // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
  const { status, permissions } = await Permissions.askAsync(
    Permissions.LOCATION,
  );
  if (status === 'granted') {
    return Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
  } else {
    throw new Error('Location permission not granted');
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
