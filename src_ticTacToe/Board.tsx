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
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};
