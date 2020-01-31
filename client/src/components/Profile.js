import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Divider,
  Paragraph,
  Subheading,
  TextInput,
} from 'react-native-paper';

const user = {
  username: 'Bender',
  nameFirst: 'Bender B.',
  nameLast: 'Rodriguez',
  email: 'BBRodriguez3000@planetexpress.com',
  status: 'Bender is Great!',
  bio: 'Bite my shiny metal ass',
};

const initials = user.nameFirst[0] + user.nameLast[0];

const Profile = ({ screenProps }) => {
  // const { username } = screenProps.screenProps;
  // const [comment, setComment] = useState('');
  // const postComment = () => {
  //   console.log(comment);
  //   setComment('');
  // };

  return (
    <Card style={styles.container}>
      <View>
        <KeyboardAvoidingView behavior='position' enabled>
          <Card>
            <Card.Title
              title={`${user.nameFirst} ${user.nameLast}`}
              subtitle={user.email}
              left={() => <Avatar.Text size={48} label={initials} />}
            />
            <Divider />
            <Card.Content style={{ paddingTop: 10 }}>
              <Paragraph>{user.status}</Paragraph>
              <Divider />
              <Paragraph>{user.bio}</Paragraph>
            </Card.Content>
          </Card>
        </KeyboardAvoidingView>
      </View>
    </Card>
  );
};

Profile.navigationOptions = {
  title: user.username,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Profile;
