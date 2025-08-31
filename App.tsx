import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
// import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
}