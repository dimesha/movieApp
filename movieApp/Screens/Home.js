import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './Movies';
import TvShows from './TvShows';
import { Ionicons } from '@expo/vector-icons'; // Use @expo/vector-icons for Expo

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Movies') {
            iconName = focused ? 'film' : 'film-outline';
          } else if (route.name === 'TvShows') {
            iconName = focused ? 'tv' : 'tv-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Movies" component={Movies} options={{ headerShown: false }} />
      <Tab.Screen name="TvShows" component={TvShows} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
