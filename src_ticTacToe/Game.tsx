import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';

type squarable = 'X' | 'O' | null;
type historable = { squares: squarable[] };

export const Game: FunctionalComponent = () => {
  const [histories, setHistories] = useState<historable[]>([
    { squares: Array<squarable>(9).fill(null) }, // generics
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number): void => {
    setHistories((prevHistories) => {
      const squares = [...prevHistories[prevHistories.length - 1].squares];
      // update clicked square
      squares[index] = xIsNext ? 'X' : 'O';
      return [...prevHistories, { squares }];
    });
    setXIsNext((prev) => !prev);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
