import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Paragraph } from 'react-native-paper';

const CommentsMaker = ({ commentProp, i }) => {
  const [comment, setComment] = useState(commentProp);
  const initials = comment.user.name_first[0] + comment.user.name_last[0];

  return (
    <Card style={styles.container}>
      <Card.Title
        title={comment.user.username}
        style={{
          backgroundColor: '#F5F0F6',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        left={() => (
          <Avatar.Text size={40} label={initials} style={styles.avatar} />
        )}
      />
      <Divider />
      <Paragraph style={{ padding: 18, fontSize: 18 }}>
        {comment.text}
      </Paragraph>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: '#fff',
  },
  avatar: { backgroundColor: '#8F754F' },
});

export default CommentsMaker;
