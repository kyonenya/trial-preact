import { h, FunctionComponent as FC } from 'preact';
import { Square } from './Square';
import { squarable } from './types';

export const Board: FC<{
  squares: squarable[];
  onClick: (index: number) => void;
}> = ({ squares, onClick }) => {
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      {[...Array(3).keys()].map((i) => (
        <div className="board-row">
          {[...Array(3).keys()].map((j) => {
            const index = i * 3 + j;
            return (
              <Square
                square={squares[index]}
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
