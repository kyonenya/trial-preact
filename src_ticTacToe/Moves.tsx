import { h, FunctionComponent as FC } from 'preact';
import { historable } from './types';

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
                ? `#${num.toString()} col:${aHistory.location.col?.toString()} row:${aHistory.location.row?.toString()}`
                : `Go to game start`}
            </button>
          </li>
        );
      })}
    </ol>
  );
};
