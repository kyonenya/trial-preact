import { h, FunctionComponent } from 'preact';
import { Square } from './Square';
import { squarable } from './types';

type boardProps = {
  squares: squarable[],
}

export const Board: FunctionComponent<boardProps> = (props: boardProps) => {
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      {
        [...Array(3).keys()].map((i) => (
          <div className="board-row">
            {
              [...Array(3).keys()].map((j) => (
                <Square
                  square={props.squares[i * 3 + j]}
                  key={i * 3 + j}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};
