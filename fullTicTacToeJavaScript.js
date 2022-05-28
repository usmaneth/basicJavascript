function ticTacToe() {
  // initialize game board
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];
  
  // player 1 is X, player 2 is O
  let player = 'X';
  
  // track whether game is over
  let gameOver = false;
  
  // helper function to check if a player has won
  const checkWin = () => {
    // check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
    }
    
    // check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
        return true;
      }
    }
    
    // check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    
    if (board[2][0] === player && board[1][1] === player && board[0][2] === player) {
      return true;
    }
    
    return false;
  };
  
  // helper function to check if board is full
  const checkFull = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === ' ') {
          return false;
        }
      }
    }
    
    return true;
  };
  
  // main game loop
  while (!gameOver) {
    // print current game board
    console.log(`${board[0][0]}|${board[0][1]}|${board[0][2]}`);
    console.log(`${board[1][0]}|${board[1][1]}|${board[1][2]}`);
    console.log(`${board[2][0]}|${board[2][1]}|${board[2][2]}`);
    
    // get player input
    const input = prompt(`${player}'s turn. Enter row and column (ex. 1 2)`);
    const row = Number(input[0]);
    const col = Number(input[2]);
    
    // validate input
    if (row < 1 || row > 3 || col < 1 || col > 3) {
      console.log('Invalid input');
      continue;
    }
    
    // update game board
    if (board[row - 1][col - 1] === ' ') {
      board[row - 1][col - 1] = player;
    } else {
      console.log('Invalid input');
      continue;
    }
    
    // check for win
    if (checkWin()) {
      gameOver = true;
      console.log(`${player} wins!`);
    // check for draw
    } else if (checkFull()) {
      gameOver = true;
      console.log('Draw!');
    // switch players
    } else {
      player = player === 'X' ? 'O' : 'X';
    }
  }
}

ticTacToe();
