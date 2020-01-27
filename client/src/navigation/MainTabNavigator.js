import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NewPostScreen from '../screens/NewPostScreen';
import MessageScreen from '../screens/MessageScreen';
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

const NewPostStack = createStackNavigator(
  {
    NewPost: NewPostScreen,
  },
  config,
);

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

const SettingsStack = createStackNavigator(
  {
    Settings: MessageScreen,
  },
  config,
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-message' : 'md-message'}
    />
  ),
};

MessageStack.path = '';

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
  NewPostStack,
  MessageStack,
  MapStack,
});

tabNavigator.path = '';

export default tabNavigator;
