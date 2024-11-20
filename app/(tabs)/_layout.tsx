import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../theme/ThemeContext'; 

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary, 
        headerStyle: {
          backgroundColor: theme.background, 
        },
        headerShadowVisible: false,
        headerTintColor: theme.text, 
        tabBarStyle: {
          backgroundColor: theme.background, 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="gods"
        options={{
          title: 'Gods',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'flash-sharp' : 'flash-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="items"
        options={{
          title: 'Items',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'construct-sharp' : 'construct-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}