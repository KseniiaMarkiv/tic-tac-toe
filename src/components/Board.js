import { useState } from 'react';

import Square from "./Square"

export default function Board({ xIsNext, squares, onPlay, onReset }) {

  function handleClick(i) {
    if (squares[i]  || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();  
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner
      ? winner + " Winner"
      : !squares.includes(null)
        ? "Tie"
        : "Next player: " + (xIsNext ? "X" : "O");


  return (
    <section className="board-section">
      <div className="board">
        <div className="board-row square-first">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> 
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row square-second">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row square-third">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <button className="reset-button" onClick={onReset}>
          Reset
      </button>
      <div className="status">{status}</div>
    </section>
    )
}

function calculateWinner(squares) {
  // adding all combinations of winning lines
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {  // iterate them
    const [a, b, c] = lines[i];             // save to variables of rows
                                            // returns appropriate squares
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}