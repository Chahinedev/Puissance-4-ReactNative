import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cells';
import { initializeBoard, dropDisc, checkWin } from '../utils/gameLogics';

const Board = () => {
  const [board, setBoard] = useState(initializeBoard());
  const [currentPlayer, setCurrentPlayer] = useState('red');

  const handleDrop = (colIndex) => {
    const newBoard = dropDisc(board, colIndex, currentPlayer);
    if (newBoard) {
      setBoard(newBoard);
      if (checkWin(newBoard, currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        setBoard(initializeBoard());
      } else {
        setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
      }
    }
  };

  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} color={cell} onPress={() => handleDrop(colIndex)} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: 'blue',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
