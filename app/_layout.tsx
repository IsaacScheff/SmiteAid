import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="gods" options={{ title: 'Gods' }} />
      <Stack.Screen name="items" options={{ title: 'Items' }} />
    </Stack>
  );
}