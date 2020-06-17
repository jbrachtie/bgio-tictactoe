import { INVALID_MOVE } from 'boardgame.io/core';

export const TicTacToe = {
  // set initial value of game state `G`: (setup is built in fn)
  setup: (ctx) => ({ // setup receives `ctx` as first arg (unused here)
    cells: Array(9).fill(null) // cells is a custom field
  }),

  // 1. A `move` function receives game state `G` and updates
  //    it to the desired new state.
  // 2. It also receives `ctx`, an object maintained by the lib
  //    that contains metadata like `turn` and `currentPlayer`.
  // 3. After `G` and `ctx`, moves can receive arbitrary arguments
  //    that you pass in when making the move.

  // moves that make up the game: (moves is built-in prop)
  moves: {
    clickCell: (G, ctx, id) => { // custom fn name
      if(G.cells[id] !== null) return INVALID_MOVE;
      G.cells[id] = ctx.currentPlayer;
    }
  },

  // define what a turn looks like: (turn built-in)
  turn: {
    moveLimit: 1 // built-in prop
  },

  // Called each time the game state updates to check if
  // the game is over.
  // If the function returns anything at all, the game ends
  // and the return value is available at `ctx.gameover`.
  endIf: (G, ctx) => {
    if(isVictory(G.cells)) {
      return ({
        winner: ctx.currentPlayer
      });
    }
    if(isDraw(G.cells)) {
      return ({
        draw: true
      });
    }
  }
}

// Return true if `cells` is a winning configuration
const isVictory = (cells) => {
  const positions = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diags
  ];

  const isRowComplete = (row) => {
    const symbols = row.map(i => cells[i]);
    return symbols.every(i => (i !== null && i === symbols[0]));
  }

  return positions.map(isRowComplete).some(i => i === true);

}

// Return true if all `cells` are occupied
const isDraw = (cells) => {
  return cells.filter(c => c === null).length === 0;
}