import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, ScrollView, Dimensions } from 'react-native';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 29.9499,
          longitude: -90.0701,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
