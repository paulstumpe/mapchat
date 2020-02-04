import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Button, Title, TextInput, Switch, Divider } from 'react-native-paper';
import MessagePreview from '../components/MessagePreview';
import { getAll } from '../Helper';
import { useFocusEffect } from 'react-navigation-hooks';

const LoginScreen = screenProps => {
  return (
    <ScrollView>
      <Title>Login</Title>
    </ScrollView>
  );
};

LoginScreen.navigationOptions = {
  title: 'Login',
};

export default LoginScreen;
