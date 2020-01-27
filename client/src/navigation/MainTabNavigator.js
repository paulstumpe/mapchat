import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import NewPostScreen from '../screens/NewPostScreen';
<<<<<<< HEAD
=======
import MessageScreen from '../screens/MessageScreen';
>>>>>>> 59b55de1442272915e654f1a602e7d72f508ad76
import MapScreen from '../screens/MapScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     NewPost: NewPostScreen,
//   },
//   config,
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'New Post',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

// LinksStack.path = '';

const ListStack = createStackNavigator(
  {
    List: ListScreen,
  }
);

const NewPostStack = createStackNavigator(
  {
    NewPost: NewPostScreen,
  },
  config,
);

// ListStack.navigationOptions = {
//   tabBarLabel: 'Message List',
// };

NewPostStack.navigationOptions = {
  tabBarLabel: 'New Post',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'}
    />
  ),
};

NewPostStack.path = '';

const MessageStack = createStackNavigator(
  {
<<<<<<< HEAD
    Settings: ListScreen,
=======
    Message: MessageScreen,
>>>>>>> 59b55de1442272915e654f1a602e7d72f508ad76
  },
  config,
);

<<<<<<< HEAD
SettingsStack.navigationOptions = {
  tabBarLabel: 'Message List',
=======
MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
>>>>>>> 59b55de1442272915e654f1a602e7d72f508ad76
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
    />
  ),
};

<<<<<<< HEAD
ListStack.path = '';
=======
MessageStack.path = '';
>>>>>>> 59b55de1442272915e654f1a602e7d72f508ad76

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  config,
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

MapStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ListStack,
  NewPostStack,
  MessageStack,
  MapStack,
});

tabNavigator.path = '';

export default tabNavigator;
