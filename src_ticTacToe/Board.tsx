import { h, FunctionComponent } from 'preact';
import { Square } from './Square';
import { squarable } from './types';

type boardProps = {
  squares: squarable[];
  onClick: (index: number) => void;
};

export const Board: FunctionComponent<boardProps> = ({
  squares, 
  onClick,
}: boardProps) => {
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      {[...Array(3).keys()].map((i) => (
        <div className="board-row">
          {[...Array(3).keys()].map((j) => {
            const index = i * 3 + j;
            return (
              <Square square={squares[index]} onClick={() => onClick(index)} key={index} />
            );
          })}
        </div>
      ))}
    </div>
  );
};
