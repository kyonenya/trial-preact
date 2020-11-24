import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
import { squarable, historable } from './interface';

export const Game = () => {
  const row = 3;
  const column = 3;
  
  const [history, setHistory] 
    = useState<historable[]>([
      { squares: Array(row * column).fill(null) }
    ]); 
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  
  const winner = calculateWinner(history[history.length - 1].squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
  const handleClick = (index: number): void => {
    if (winner) return;
    setHistory((prevHistory) => {
      const squares = prevHistory[prevHistory.length - 1].squares;
      squares[index] = xIsNext
        ? 'X'
        : 'O';
      setXIsNext(!xIsNext);
      
      return [...prevHistory, { squares }];
    });
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={history[history.length - 1].squares}
          onClick={(index: number) => handleClick(index)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

const calculateWinner = (squares: squarable[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
