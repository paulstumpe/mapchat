import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Avatar, Button, Card, Divider, Text } from 'react-native-paper';

const user = {
  username: 'Bender',
  nameFirst: 'Bender B.',
  nameLast: 'Rodriguez',
  email: 'BBRodriguez3000@planetexpress.com',
  status: 'Bender is Great!',
  bio: 'Bite my shiny metal ass',
};

const initials = user.nameFirst[0] + user.nameLast[0];

const Profile = props => {
  const { toggleProfileModal } = props;

  const addUser = () => {
    toggleProfileModal(false);
    console.log(`sent friend request to ${user.username}`);
  };

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
              <Text
                style={{ paddingBottom: 7, fontWeight: 'bold', fontSize: 16 }}
              >
                Status: {user.status}
              </Text>
              <Divider />
              <Text
                style={{
                  paddingTop: 7,
                  paddingBottom: 7,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                Bio: {user.bio}
              </Text>
              <Divider />
              <Button
                icon='account-plus'
                mode='contained'
                style={{
                  marginTop: 10,
                  marginRight: 220,
                  height: 40,
                  width: 150,
                }}
                onPress={() => addUser()}
              >
                Add Friend
              </Button>
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
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Profile;
