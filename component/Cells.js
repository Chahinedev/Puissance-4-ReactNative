import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const Cell = ({ color, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <View style={[styles.disc, { backgroundColor: color || 'white' }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    padding: 5,
  },
  disc: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
});

export default Cell;
