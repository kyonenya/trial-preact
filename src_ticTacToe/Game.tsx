import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';

type squarable = 'X' | 'O' | null;
type historable = { squares: squarable[] };

export const Game = () => {  
  const [histories, setHistories] = useState<historable[]>([
    { squares: Array<squarable>(9).fill(null) } // generics
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  
  const handleClick = (stepNumber: number): void => {

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
}
