export const initializeBoard = () => {
  const rows = 6;
  const cols = 7;
  const board = Array(rows).fill(null).map(() => Array(cols).fill(null));
  return board;
};

export const dropDisc = (board, colIndex, player) => {
  for (let row = board.length - 1; row >= 0; row--) {
    if (!board[row][colIndex]) {
      const newBoard = board.map(row => [...row]);
      newBoard[row][colIndex] = player;
      return newBoard;
    }
  }
  return null;
};

export const checkWin = (board, player) => {
  const directions = [
    { x: 0, y: 1 },  
    { x: 1, y: 0 },   
    { x: 1, y: 1 },   
    { x: 1, y: -1 }  

    /*
    Check l'horizontale 
    check le verticale 
    pour le diagonale superier on ajoute en mettant l'axe X et l'axe Y a 1 on ce deplace en diagonale superieur
    en fesant l'inverse avec le Y en negatif on ce deplace en diagonale inferieur 
    */
   
  ];

  const checkDirection = (board, row, col, player, direction) => {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      const newRow = row + i * direction.y;
      const newCol = col + i * direction.x;
      if (
        newRow >= 0 && newRow < board.length &&
        newCol >= 0 && newCol < board[0].length &&
        board[newRow][newCol] === player
      ) {
        count++;
      } else {
        break;
      }
    }
    return count === 4;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === player) {
        for (const direction of directions) {
          if (checkDirection(board, row, col, player, direction)) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
