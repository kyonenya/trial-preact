import { h, FunctionComponent as FC } from 'preact';
import { Square } from './Square';
import { squarable } from './types';

export const Board: FC<{
  squares: squarable[];
  winIndexes: number[] | undefined;
  onClick: (index: number) => void;
}> = ({ squares, winIndexes, onClick }) => {
  return (
    <div>
      {[...Array(3).keys()].map((i) => (
        <div className="board-row">
          {[...Array(3).keys()].map((j) => {
            const index = i * 3 + j;
            return (
              <Square
                square={squares[index]}
                isWinIndex={
                  winIndexes ? winIndexes.indexOf(index) !== -1 : false
                }
                onClick={() => onClick(index)}
                key={index}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
