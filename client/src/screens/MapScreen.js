import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MapScreen({ screenProps }) {
  const { latitude, longitude } = screenProps.coords;
  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const messages = [
    { latitude: 29.971426, longitude: -90.072672, key: 1 },
    { latitude: 29.965022, longitude: -90.072675, key: 2 },
    { latitude: 29.967577, longitude: -90.072677, key: 3 },
  ];
  return (
    <ScrollView style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={region}
        showsUserLocation={true}
        userTrackingMode={true}
      >
        {messages.map(message => {
          return (
            <MapView.Marker
              coordinate={{
                latitude: message.latitude,
                longitude: message.longitude,
              }}
              key={message.key}
            />
          );
        })}
      </MapView>
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