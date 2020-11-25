import { h } from 'preact';
import { Square } from './Square';

export const Board = () => {
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        // 0-2
        <Square />
        <Square />
        <Square />
      </div>
        // 3-5
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        // 6-8
        <Square />
        <Square />
        <Square />
     </div>
    </div>
  );
}
