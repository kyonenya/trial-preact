import { h, FunctionComponent as FC } from 'preact';
import { Board } from './Board';
import { Moves } from './Moves';
import { useHistories } from './useHistories';
import { useTurn } from './useTurn';
import { useStepNum } from './useStepNum';

export const Game: FC = () => {
  const [histories, updateHistories, winnerOf] = useHistories();
  const [xIsNext, switchTurn, jumpTurn] = useTurn();
  const [stepNum, nextStep, jumpStep] = useStepNum();

  const handleClick = (index: number): void => {
    if (winnerOf(stepNum)) return;
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
          {winnerOf(stepNum)
            ? `Winner: ${winnerOf(stepNum)?.toString()}`
            : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </div>
        <Moves histories={histories} jumpTo={jumpTo} />
      </div>
    </div>
  );
};
