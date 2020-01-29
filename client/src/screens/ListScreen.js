import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, Card, Title, List, Subheading, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { getAll } from '../Helper'

const blah ={text:"lol",username:"dave", timestamp:"later", description:"lol"};
const blah2 = {text: "not funny",username: "billy",timestamp: "later",description: "lol"}
const blah3 = {text: "huh",username: "mike",timestamp: "later",description: "lol"}
const array = [blah,blah2,blah3,blah,blah2];


// export default function ListScreen({screenProps}){
//     return ( 
//       <List.Section>
//       {array.map(post=>(<List.Section >
//           < Subheading >{post.text}</Subheading>
//             < Paragraph >{post.username}</Paragraph>
//             < Paragraph >{post.timestamp}</Paragraph>
//             < Paragraph >{post.description}</Paragraph>
//       </List.Section>))}
//       </List.Section>
//     );
// }

// Get yourself an axios request so that you can work with some real data instead of dummy data
const ListScreen = ({screenProps}) => {
  let users;
  const [messages, setMessages] = useState([]);
  getAll(users)
    .then(({
      data
    }) => {
      console.log(data);
      users = data;
      const allMessages = data.map((message) => {
 
        setMessages(allMessages);        
      })
    })
    .catch(err => console.log(err));
    console.log(users);
  return (
    
<List.Section>
  <ScrollView>
  {array.map(post=> (
  <Card>
    <Card.Title
      title={post.username}
      subtitle={post.text}
      left={props => <Avatar.Icon {...props} icon="folder" />}
    />
    <Card.Content>
      <Title>Test Message</Title>
      <Paragraph>Cue the Lorem Ipsum</Paragraph>
    </Card.Content>
  </Card>
  ))}
  </ScrollView>
</List.Section>
  )
};

export default ListScreen;