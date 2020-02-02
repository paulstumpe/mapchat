import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useFocusEffect } from 'react-navigation-hooks';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Overlay,
} from 'react-native';
import Modal from 'react-native-modal';
import { getAll } from '../Helper';
import PreviewList from '../components/PreviewList';

export default function MapScreen({ screenProps }) {
  const { navigate } = useNavigation();
  const [messages, setMessages] = useState([]);

  const [displayMessagesModal, toggleDisplayMessagesModal] = useState(true);

  useEffect(() => {
    getAll()
      .then(({ data }) => {
        // console.log(data);
        const allMessages = data.map(message => {
          message.longitude = parseFloat(message.coordinate.long);
          message.latitude = parseFloat(message.coordinate.lat);
          return message;
        });
        console.log(allMessages);
        setMessages(allMessages);
      })
      .catch(err => console.log(err));
  }, []);

  useFocusEffect(
    useCallback(() => {
      getAll()
        .then(({ data }) => {
          console.log(data);
          const allMessages = data.map(message => {
            message.longitude = parseFloat(message.coordinate.long);
            message.latitude = parseFloat(message.coordinate.lat);
            return message;
          });
          console.log(allMessages);
          setMessages(allMessages);
        })
        .catch(err => console.log(err));
    }, []),
  );

  const { latitude, longitude } = screenProps.location.coords;
  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const [dropMarker, setDropMarker] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MapView
          style={styles.mapStyle}
          initialRegion={region}
          showsUserLocation={true}
          userTrackingMode={true}
          onPress={event => setDropMarker(event.nativeEvent.coordinate)}
        >
          {dropMarker.latitude !== undefined &&
            dropMarker.longitude !== undefined && (
              <Marker
                coordinate={{
                  latitude: dropMarker.latitude,
                  longitude: dropMarker.longitude,
                }}
                key={dropMarker.key}
                onPress={() => {
                  console.log(
                    `Leave a message at latitude ${dropMarker.latitude} and longitude ${dropMarker.longitude}?`,
                  );
                  console.log(this);
                  screenProps.otherLocationObj.setOtherLocation(true);
                  navigate('NewPost', {
                    latitude: dropMarker.latitude,
                    longitude: dropMarker.longitude,
                  });
                  // props.navigation.navigate('Message')
                }}
              >
                <Image
                  source={require('../assets/images/message.png')}
                  style={{ height: 45, width: 35 }}
                />
              </Marker>
            )}
          {messages.map((message, i) => {
            return (
              <MapView.Marker
                coordinate={{
                  latitude: message.latitude,
                  longitude: message.longitude,
                }}
                key={i}
                onPress={() =>
                  //todo modal or redirect to drop post
                  // withNavigation
                  console.log(
                    `You're at latitude ${message.latitude} & longitude ${message.longitude}`,
                  )
                }
              />
            );
          })}
        </MapView>
        <Modal
          isVisible={displayMessagesModal}
          coverScreen={true}
          scrollOffsetMax={400 - 300}
          backdropOpacity={0}
          onBackdropPress={() => toggleDisplayMessagesModal(false)}
          style={styles.modal}
        >
          <PreviewList />
        </Modal>
      </ScrollView>
      {!displayMessagesModal && (
        <Text
          style={styles.button}
          onPress={() => toggleDisplayMessagesModal(true)}
        >
          {' '}
          Display Messages{' '}
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  modal: {
    justifyContent: 'flex-end',
    marginTop: 400,
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },
});
