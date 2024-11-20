import React from 'react';
import { Stack } from "expo-router";
import { ThemeProvider } from '../theme/ThemeContext'; 

export default function RootLayout() {
  return (
    <ThemeProvider>  {/* Wrap the entire Stack with ThemeProvider */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="GodDetailScreen" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}