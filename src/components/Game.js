import { useState } from 'react';

import Board from "./Board"

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? 'Go to move #' + move : 'Go to game start';

    return (
      <p className='jump-to' key={move}>
        <a onClick={() => jumpTo(move)}>{description}</a>
      </p>
    );
  });

  return (
    <>
      <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onReset={handleReset} />
      </div>
      <div className="game-info">
        <div>{moves}</div>
      </div>
    </div>
    </>
  )
}