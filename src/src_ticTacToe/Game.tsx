import { h, FunctionComponent as FC } from 'preact';
import { useEffect } from 'preact/hooks';
import { Board } from './Board';
import { Moves } from './Moves';
import { useHistories } from './useHistories';
import { useTurn } from './useTurn';
import { useStepNum } from './useStepNum';

export const Game: FC = () => {
  const [histories, updateHistories, getWinner] = useHistories();
  const [isXTurn, switchTurn, jumpTurn] = useTurn();
  const [stepNum, nextStep, jumpStep] = useStepNum();

  useEffect(() => {
    document.title = getWinner(stepNum)
      ? `Winner: ${getWinner(stepNum)?.winner.toString()}`
      : `Next player: ${isXTurn ? 'X' : 'O'}`;
  });

  const handleClick = (index: number): void => {
    if (getWinner(stepNum)) return;
    if (histories[stepNum].squares[index]) return; // if already clicked
    updateHistories(index, stepNum, isXTurn);
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
          winIndexes={getWinner(stepNum)?.indexes}
          onClick={(index) => handleClick(index)}
        />
      </div>
      <div className="game-info">
        <div>
          {getWinner(stepNum)
            ? `Winner: ${getWinner(stepNum)?.winner.toString()}`
            : `Next player: ${isXTurn ? 'X' : 'O'}`}
        </div>
        <Moves histories={histories} jumpTo={jumpTo} />
      </div>
    </div>
  );
};
