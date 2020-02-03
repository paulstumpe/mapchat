import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Text,
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
import Modal from 'react-native-modal';
import { getOne } from '../Helper';

const MessageItem = ({ post }) => {
  const [messageModal, toggleMessageModal] = useState(false);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState({});
  const [comments, setComments] = useState([]);

  const postComment = () => {
    console.log(comment, 'postComment MessageItem.js');
    setComment('');
  };

  useEffect(() => {
    //todo unhardcode from just getting the first message on server
    getOne({ id: 1 }).then(({ data }) => {
      setMessage(data);
      setComments(data.comments);
    });
  }, []);

  const { username, title, text, name_first, name_last } = post.user;
  const initials = name_first[0] + name_last[0];

  return (
    <Card style={styles.container} title='Show messageModal'>
      <Text onPress={() => toggleMessageModal(true)} style={{ marginTop: -10 }}>
        {post.text}
      </Text>
      <Modal
        isVisible={messageModal}
        onBackButtonPress={() => toggleMessageModal(false)}
      >
        <ScrollView>
          <KeyboardAvoidingView behavior='position' enabled>
            <Card>
              <Card.Title
                title={username}
                subtitle={title}
                left={() => <Avatar.Text size={48} label={initials} />}
              />
              <Divider />
              <Paragraph style={{ padding: 18 }}>{text}</Paragraph>
            </Card>
            {comments &&
              comments.map((comment, i) => {
                return (
                  <Card style={{ marginTop: 10 }} key={i}>
                    <Subheading> {comment.username}</Subheading>
                    <Divider />
                    <Card.Content style={{ paddingTop: 10 }}>
                      <Paragraph>{comment.text}</Paragraph>
                    </Card.Content>
                  </Card>
                );
              })}
            <Card
              style={{
                borderRadius: 10,
                position: 'relative',
                zIndex: 2,
                marginTop: 10,
              }}
            >
              <Card.Content>
                <TextInput
                  label='Comment'
                  placeholder='comment'
                  mode='outlined'
                  multiline={true}
                  numberOfLines={3}
                  value={comment}
                  onChangeText={comment => setComment(comment)}
                />
                <Button
                  icon='send'
                  mode='contained'
                  style={{
                    marginTop: 10,
                    marginRight: 220,
                    height: 40,
                  }}
                  onPress={() => postComment()}
                >
                  Comment
                </Button>
              </Card.Content>
            </Card>
          </KeyboardAvoidingView>
        </ScrollView>
      </Modal>
    </Card>
  );
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

export default MessageItem;
