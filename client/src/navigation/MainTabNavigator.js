import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import FriendsScreen from '../screens/FriendsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import ListScreen from '../screens/ListScreen';
import NewPostScreen from '../screens/NewPostScreen';
import MapScreen from '../screens/MapScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

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

const UserProfileStack = createStackNavigator(
  {
    UserProfile: UserProfileScreen,
  },
  config,
);

UserProfileStack.navigationOptions = {
  tabBarLabel: 'User Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : '-outline'}`
          : 'md-person'
      }
    />
  ),
};

UserProfileStack.path = '';

const ListStack = createStackNavigator(
  {
    List: ListScreen,
  },
  config,
);

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
};

ListStack.path = '';

const NewPostStack = createStackNavigator(
  {
    NewPost: {
      screen: NewPostScreen,
      params: { longitude: null, latitude: null },
    },
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

const FriendsStack = createStackNavigator(
  {
    Friends: {
      screen: FriendsScreen,
      params: { longitude: null, latitude: null },
    },
  },
  config,
);

FriendsStack.navigationOptions = {
  tabBarLabel: 'Friends',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
    />
  ),
};

FriendsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ListStack,
  MapStack,
  NewPostStack,
  UserProfileStack,
  FriendsStack,
});

tabNavigator.path = '';

export default tabNavigator;
