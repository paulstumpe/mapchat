import * as React from 'react';
import {
  List,
  Subheading,
  Paragraph,
} from 'react-native-paper';
const blah ={text:"lol",username:"user", timestamp:"later", description:"lol"};
const array = [blah,blah,blah];
export default function ListScreen({screenProps}){
    return ( 
      <List.Section>
      {array.map(post=>(<List.Section >
          < Subheading >{post.text}</Subheading>
            < Paragraph >{post.username}</Paragraph>
            < Paragraph >{post.timestamp}</Paragraph>
            < Paragraph >{post.description}</Paragraph>
      </List.Section>))}
      </List.Section>
    );
}
