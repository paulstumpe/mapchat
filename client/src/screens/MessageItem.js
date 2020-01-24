import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, ScrollView, Dimensions, Modal, View } from 'react-native';
// import { ToastAndroid } from 'react-native';

export default function MessageItem( isVisible, onBackDropPress) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  
  return (
    <React.Fragment>
    <View style={{ flex: 1, marginTop: 100 }}></View>
    <Text style={{ fontSize: 24 }}>This is only a test. May the Force be with you!</Text>
    <Modal onBackDropPress={onBackDropPress}>
      {/* transparent={true}
      visible={true} */}
      <View style={{backgroundColor:"#000000aa", flex: 1}}>
        <View style={{backgroundColor:"#ffffff", 
        margin: 20, 
        padding: 15, 
        height: 150 }}>
          <Text style={{fontSize: 20}}>We repeat this is only a test.Live long and prosper! </Text>
        </View>
      </View>
    </Modal>
    </React.Fragment>
  );
}
MessageItem.propTypes = {
  isVisible: PropTypes.bool,
  onBackDropPress: PropTypes.func,
}
MessageItem.navigationOptions = {
  title: 'app.json',
};
