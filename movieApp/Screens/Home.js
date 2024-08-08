import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './Movies';
import TvShows from './TvShows';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} options={{headerShown: false}}/>
      <Tab.Screen name="TvShows" component={TvShows} options={{headerShown: false}} />
    </Tab.Navigator>
    
  )
}
