import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import TicTacToeBoard from './Board';

// data from whatever is set as "game" will be set as props
// for whichever component is set as "board"
const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard
  // debug: false // toggle debug panel
});

// Created by `create-react-app`:
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
