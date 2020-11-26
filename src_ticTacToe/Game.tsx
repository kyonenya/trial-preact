import { h, FunctionComponent as FC } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
import { useXIsNext } from './useXIsNext';
import { squarable, historable } from './types';

export const Game: FC = () => {
  const [histories, setHistories] = useState<historable[]>([
    { squares: Array<squarable>(9).fill(null) }, // generics
  ]);
  const [xIsNext, nextTurn] = useXIsNext();
  
  const winner = calculateWinner(histories[histories.length - 1].squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (index: number): void => {
    if (winner) return;
    setHistories((prevHistories) => {
      const squares = [...prevHistories[prevHistories.length - 1].squares];
      // update clicked square
      squares[index] = xIsNext ? 'X' : 'O';
      return [...prevHistories, { squares }];
    });
    nextTurn();
  };
  
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={histories[histories.length - 1].squares}
          onClick={(index) => handleClick(index)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

const calculateWinner = (squares: squarable[]): squarable => {
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
