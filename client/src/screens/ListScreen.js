import * as React from 'react';
import { Avatar, Button, Card, Title, List, Subheading, Paragraph } from 'react-native-paper';

const blah ={text:"lol",username:"user", timestamp:"later", description:"lol"};
const array = [blah,blah,blah];

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



const ListScreen = () => (
  <Card>
    <Card.Title
      title="Marc-y Marc & da Funky Bunch"
      subtitle="Subtitle Text"
      left={props => <Avatar.Icon {...props} icon="folder" />}
    />
    {/* <Card.Cover source={{ uri: "https://picsum.photos/350" }} /> */}
    <Card.Content>
      <Title>Test Message</Title>
      <Paragraph>Cue the Lorem Ipsum</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Confirm</Button>
      <Button>Cancel</Button>
    </Card.Actions>
  </Card>
);

export default ListScreen;