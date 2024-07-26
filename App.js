import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Board from './component/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puissance 4</Text>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
