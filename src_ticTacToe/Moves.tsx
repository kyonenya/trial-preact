import { h, FunctionComponent as FC } from 'preact';
import { squarable, historable } from './types';

export const Moves: FC<{
  histories: historable[];
  jumpTo: (stepNum: number) => void;
}> = ({ histories, jumpTo }) => {
  return (
    <ol>
      {histories.map((aHistory, num) => {
        return (
          <li>
            <button onClick={() => jumpTo(num)}>
              {num !== 0
                ? `#${num} col:${aHistory.location.col} row:${aHistory.location.row}`
                : `Go to game start`}
            </button>
          </li>
        );
      })
      
      }
    </ol>);
};
