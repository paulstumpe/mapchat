import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, Card, Title, List, Subheading, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { getAll } from '../Helper'

const blah ={text:"lol",username:"user", timestamp:"later", description:"lol"};
const array = [blah,blah,blah,blah,blah];

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
  const [messages, setMessages] = useState([]);
  getAll()
    .then(({
      data
    }) => {
      console.log(data);
      const allMessages = data.map((message) => {
        message.longitude = parseFloat(message.coordinate.long);
        message.latitude = parseFloat(message.coordinate.lat);
        return message;
      })
      console.log(typeof allMessages[0].latitude);
      setMessages(allMessages);
    })
    .catch(err => console.log(err));

  return (
<List.Section>
  <ScrollView>
  {messages.map(post=> (
  <Card>
    <Card.Title
      title={post.username}
      subtitle={post.text}
      left={props => <Avatar.Icon {...props} icon="folder" />}
    />
    <Card.Cover source={{ uri: "https://picsum.photos/350" }} />
    <Card.Content>
      <Title>Test Message</Title>
      <Paragraph>Cue the Lorem Ipsum</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Confirm</Button>
      <Button>Cancel</Button>
    </Card.Actions>
  </Card>
  ))}
  </ScrollView>
</List.Section>
  )
};

export default ListScreen;