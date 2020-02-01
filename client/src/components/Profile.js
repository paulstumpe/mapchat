import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Avatar, Card, Divider, Text } from 'react-native-paper';

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
              <Text
                style={{ paddingBottom: 7, fontWeight: 'bold', fontSize: 16 }}
              >
                Status: {user.status}
              </Text>
              <Divider />
              <Text style={{ paddingTop: 7, fontWeight: 'bold', fontSize: 16 }}>
                Bio: {user.bio}
              </Text>
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
