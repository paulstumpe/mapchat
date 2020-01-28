import * as React from 'react';
import { Avatar, Button, Card, Title, List, Subheading, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

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
const ListScreen = ({screenProps}) => (
<List.Section>
  <ScrollView>
  {array.map(post=> (
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
);

export default ListScreen;