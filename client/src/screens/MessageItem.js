// import React from 'react';
import PropTypes from 'prop-types'
import { React } from 'react-native';
import t from 'tcomb-form-native';
const { AppRegistry, StyleSheet, Text, View, TouchableHighlight } = React;

const Form = t.form.Form;
const DocumentFormStruct = t.struct({
  name: t.String,
  message: t.String,
});

const MessageItem = React.createClass({

  onPress: function () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  },

  render: function () {
    return ( 
      <View style = { styles.container}> 
        <Form ref = "form" type = { Person } options = { options }/> 
        <TouchableHighlight style = { styles.button } onPress = { this.onPress } underlayColor = '#99d9f4' >
      <Text style = { styles.buttonText } > Save </Text> 
      </TouchableHighlight> 
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

// export default function MessageItem( isVisible, onBackDropPress) {

//   return (
    // <React.Fragment>
    // <View style={{ flex: 1, marginTop: 100 }}></View>
    // <Text style={{ fontSize: 24 }}>This is only a test. May the Force be with you!</Text>
    // <Modal onBackDropPress={onBackDropPress}>
    //   {/* transparent={true}
    //   visible={true} */}
    //   <View style={{backgroundColor:"#000000aa", flex: 1}}>
    //     <View style={{backgroundColor:"#ffffff", 
    //     margin: 20, 
    //     padding: 15, 
    //     height: 150 }}>
    //       <Text style={{fontSize: 20}}>We repeat this is only a test.Live long and prosper! </Text>
    //     </View>
    //   </View>
    // </Modal>
    // </React.Fragment>
//   );
// }
// MessageItem.propTypes = {
//   isVisible: PropTypes.bool,
//   onBackDropPress: PropTypes.func,
// }
MessageItem.navigationOptions = {
  title: 'app.json',
};

module.exports.MessageItem = MessageItem;