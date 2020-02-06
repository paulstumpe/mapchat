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
import { getOne, postComment, getAll } from '../Helper';
import useForceUpdate from 'use-force-update';
import CommentsMaker from './comment';

const MessageItem = ({
  post,
  screenProps,
  setMessages,
  focusedMessageId,
  setFocusedMessageId,
  messages,
  resetPosts,
  messagePreviewRestPosts,
}) => {
  const [isSending, setIsSending] = useState(false);
  const [messageModal, toggleMessageModal] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments);
  const [counter, setCounter] = useState(0);
  // const forceUpdate = useForceUpdate();
  // console.log(post.comments.map(comment=>comment.text));
  // console.log(comments.map(comment=>{comment.text}));

  const sendPostComment = () => {
    //since we're posting a comment, we'll want to add it after we post it
    const commentData = {
      postId: post.id,
      text: comment,
      userId: screenProps.user.id,
    };
    postComment(commentData)
      .then(({ data }) => {
        let newComment = data;
        console.log('sendPostComment MessageItem.js');
        messagePreviewRestPosts();

        // setCounter(counter + 1);
        // forceUpdate();
        return data;
      })
      .catch(err => {
        console.log(err, 'postComment messageitemJS');
      });
    setComment('');
  };

  useEffect(() => {
    setComments(post.comments);
    console.log('called' + counter);
  }, [setCounter]);
  const { title, text } = post;
  const { username, name_first, name_last } = post.user;
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
            {post.comments &&
              post.comments.map((comment, i) => {
                return <CommentsMaker commentProp={comment} />;
                // console.log(comment.text);
                // return (
                //   <Card style={{ marginTop: 10 }} key={i}>
                //     <Subheading> {comment.user.username}</Subheading>
                //     <Divider />
                //     <Card.Content style={{ paddingTop: 10 }}>
                //       <Paragraph>{comment.text}</Paragraph>
                //     </Card.Content>
                //   </Card>
                // );
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
                  onPress={() => sendPostComment()}
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
