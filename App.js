/*This is an example of Image Picker in React Native*/
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MyTabs from './src/navigation/BottomTabs';
import StackNavigator from './src/navigation/StackNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  /* return <ListingEditScreen />; */
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
