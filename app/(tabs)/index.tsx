import React from 'react';
import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from 'expo-router';
import { useTheme } from '../../theme/ThemeContext';

const IndexContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();  // Directly use toggleTheme from the context

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Home</Text>
      <Link href="./about" style={[styles.button, { color: theme.text }]}>
        Go to About screen
      </Link>
      <Link href="./gods" style={[styles.button, { color: theme.text }]}>
        Go to Gods screen
      </Link>
      <Link href="./items" style={[styles.button, { color: theme.text }]}>
        Go to Items screen
      </Link>
      <Button title="Toggle Theme" onPress={toggleTheme} color={theme.primary} />
    </View>
  );
}

export default IndexContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
