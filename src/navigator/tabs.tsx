import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { Navigator } from './navigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={Navigator} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
};
