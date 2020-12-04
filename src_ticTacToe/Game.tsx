import { h, FunctionComponent as FC } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
import { Moves } from './Moves';
import { useHistories } from './useHistories';
import { useTurn } from './useTurn';
import { useStepNum } from './useStepNum';
import { squarable, historable } from './types';

export const Game: FC = () => {
  const [histories, updateHistories] = useHistories();
  const [xIsNext, switchTurn, jumpTurn] = useTurn();
  const [stepNum, nextStep, jumpStep] = useStepNum();

  const winner = calculateWinner(histories[stepNum].squares);
  
  const handleClick = (index: number): void => {    
    if (winner) return;
    if (histories[stepNum].squares[index]) return; // if already clicked
    updateHistories(stepNum, index, xIsNext);
    nextStep();
    switchTurn();
  };
  
  const jumpTo = (stepNum: number): void => {
    jumpStep(stepNum);
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
