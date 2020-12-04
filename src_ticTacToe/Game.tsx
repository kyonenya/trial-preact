import { h, FunctionComponent as FC } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
import { Moves } from './Moves';
import { useXIsNext } from './useXIsNext';
import { squarable, historable } from './types';

export const Game: FC = () => {
  const [histories, setHistories] = useState<historable[]>([
    {
      squares: Array<squarable>(9).fill(null),
      location: { col: null, row: null },
    }, // generics
  ]);
  const [xIsNext, switchTurn, jumpTurn] = useXIsNext();
  const [stepNum, setStepNum] = useState<number>(0);

  const winner = calculateWinner(histories[stepNum].squares);
  
  const handleClick = (index: number): void => {    
    if (winner) return;
    if (histories[stepNum].squares[index]) return; // if already clicked

    setHistories((histories) => {
      // cut off old histories if jumped
      const prevHistories = histories.slice(0, stepNum + 1);
      const col = index % 3 + 1;
      const row = Math.floor(index / 3) + 1;
      const squares = [...prevHistories[stepNum].squares];
      // update clicked square
      squares[index] = xIsNext ? 'X' : 'O';
      
      return [...prevHistories, {
        squares,
        location: { col, row },
      }];
    });
    setStepNum(prev => prev + 1);
    switchTurn();
  };
  
  const jumpTo = (stepNum: number): void => {
    setStepNum(() => stepNum);
    jumpTurn(stepNum);
  };
  
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={histories[stepNum].squares}
          onClick={(index) => handleClick(index)}
        />
      </div>
      <div className="game-info">
        <div>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </div>
        <Moves 
          histories={histories}
          jumpTo={jumpTo}
        />
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
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
