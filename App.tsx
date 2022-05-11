import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './src/navigator/navigator';
import { Tabs } from './src/navigator/tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
