import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Title, TextInput, Switch, Divider } from 'react-native-paper';
import { updateUser, getAll } from '../Helper';

export default function UserProfileScreen({ screenProps }) {
  const username = screenProps.username;
  const [newUsername, setNewUsername] = useState('');
  const [nameFirst, setNameFirst] = useState('');
  const [nameLast, setNameLast] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [status, setStatus] = useState('');
  const [password, setPassword] = useState('');
  const [profilePrivate, setProfilePrivate] = useState(false);
  const clearFields = () => {
    setNewUsername('');
    setNameFirst('');
    setNameLast('');
    setEmail('');
    setStatus('');
    setBio('');
    setPassword('');
  };

  const saveChanges = () => {
    const user = {
      username: newUsername,
      name_first: nameFirst,
      name_last: nameLast,
      password: password,
      email: email,
      bio: bio,
      status: status,
      public: profilePrivate,
      id: screenProps.user.id,
    };

    updateUser(user)
      .then(({ data }) => {
        console.log(data, 'updateUser userProfileScreen.js');
      })
      .catch(err => {
        console.log(err);
      });
    console.log(
      `User - ${newUsername}, Name - ${nameFirst} ${nameLast}, Email - ${email}, Status - ${status}, Bio - ${bio}, Password - ${password}`,
    );
    clearFields();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <SafeAreaView style={styles.container}> */}
      <ScrollView>
        <Title>{username}</Title>
        <View>
          <TextInput
            label='Change Username'
            placeholder='username'
            mode='outlined'
            value={newUsername}
            theme={{
              colors: {
                primary: '#003489',
              },
            }}
            onChangeText={newUsername => setNewUsername(newUsername)}
          />
          <TextInput
            label='First Name'
            placeholder='first name'
            mode='outlined'
            value={nameFirst}
            theme={{
              colors: {
                primary: '#003489',
              },
            }}
            onChangeText={nameFirst => setNameFirst(nameFirst)}
          />
          <TextInput
            label='Last Name'
            placeholder='last name'
            mode='outlined'
            value={nameLast}
            theme={{
              colors: {
                primary: '#003489',
              },
            }}
            onChangeText={nameLast => setNameLast(nameLast)}
          />
          <TextInput
            label='Email'
            placeholder='email'
            mode='outlined'
            value={email}
            theme={{
              colors: {
                primary: '#003489',
              },
            }}
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            label='Bio'
            placeholder='bio'
            mode='outlined'
            multiline={true}
            numberOfLines={6}
            value={bio}
            theme={{
              colors: {
                primary: '#003489',
              },
            }}
            onChangeText={bio => setBio(bio)}
          />
          <TextInput
            label='Status'
            placeholder='status'
            mode='outlined'
            value={status}
            theme={{
              colors: {
                primary: '#003489',
              },
            }}
            onChangeText={status => setStatus(status)}
          />
          <TextInput
            label='Password'
            placeholder='password'
            mode='outlined'
            value={password}
            theme={{
              colors: {
                primary: '#003489',
              },
            }}
            onChangeText={password => setPassword(password)}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Title style={{ padding: 5 }}>Make Profile Private</Title>
            <Switch
              color='#D7B377'
              value={profilePrivate}
              style={{ justifyContent: 'flex-end' }}
              onValueChange={() => setProfilePrivate(!profilePrivate)}
            />
          </View>
          <Divider />
          <Button
            icon='content-save'
            mode='contained'
            color='#385F71'
            style={{
              margin: 10,
              height: 50,
            }}
            onPress={() => saveChanges()}
          >
            Save Changes
          </Button>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
}

UserProfileScreen.navigationOptions = {
  title: 'Edit Profile',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
});
