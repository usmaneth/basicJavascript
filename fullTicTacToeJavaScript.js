function ticTacToe() {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ];
  
  function makeMove(board, player, move) {
    board[move[0]][move[1]] = player;
  }

  function isValidMove(board, move) {
    return (
      board[move[0]][move[1]] === '' &&
      (move[0] >= 0 && move[0] <= 2) &&
      (move[1] >= 0 && move[1] <= 2)
    );
  }

  function getAvailableMoves(board) {
    const moves = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          moves.push([i, j]);
        }
      }
    }
    return moves;
  }

  function hasWon(board, player) {
    for (const combination of winningCombinations) {
      let hasWon = true;
      for (const index of combination) {
        hasWon = hasWon && board[index[0]][index[1]] === player;
      }
      if (hasWon) {
        return true;
      }
    }
    return false;
  }

  function isDraw(board) {
    return getAvailableMoves(board).length === 0;
  }

  function minimax(board, depth, isMaximizing) {
    if (hasWon(board, 'X')) {
      return 10 - depth;
    } else if (hasWon(board, 'O')) {
      return depth - 10;
    } else if (isDraw(board)) {
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const move of getAvailableMoves(board)) {
        const newBoard = board.map(row => row.slice());
        makeMove(newBoard, 'X', move);
        const score = minimax(newBoard, depth + 1, false);
        if (score > bestScore) {
          bestScore = score;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (const move of getAvailableMoves(board)) {
        const newBoard = board.map(row => row.slice());
        makeMove(newBoard, 'O', move);
        const score = minimax(newBoard, depth + 1, true);
        if (score < bestScore) {
          bestScore = score;
        }
      }
      return bestScore;
    }
  }

  function getBestMove(board) {
    let bestScore = -Infinity;
    let bestMove;
    for (const move of getAvailableMoves(board)) {
      const newBoard = board.map(row => row.slice());
      makeMove(newBoard, 'X', move);
      const score = minimax(newBoard, 0, false);
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }
    return bestMove;
  }

  while (true) {
    const humanMove = prompt('Enter your move (row col): ');
    const move = humanMove.split(' ').map(n => parseInt(n));
    if (!isValidMove(board, move)) {
      alert('Invalid move!');
      continue;
    }
    makeMove(board, 'O', move);
    console.log(board.map(row => row.join(' ')).join('\n'));
    if (hasWon(board, 'O')) {
      alert('You won!');
      break;
    } else if (isDraw(board)) {
      alert('Draw!');
      break;
    }
    const aiMove = getBestMove(board);
    makeMove(board, 'X', aiMove);
    console.log(board.map(row => row.join(' ')).join('\n'));
    if (hasWon(board, 'X')) {
      alert('You lost!');
      break;
    } else if (isDraw(board)) {
      alert('Draw!');
      break;
    }
  }
}
