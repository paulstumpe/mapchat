import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/LoginScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import ListScreen from '../screens/ListScreen';
import NewPostScreen from '../screens/NewPostScreen';
import MapScreen from '../screens/MapScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config,
);

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-login${focused ? '' : '-outline'}`
          : 'md-login'
      }
    />
  ),
};

LoginStack.path = '';

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
  LoginStack,
  UserProfileStack,
  ListStack,
  NewPostStack,
  MapStack,
});

tabNavigator.path = '';

export default tabNavigator;
