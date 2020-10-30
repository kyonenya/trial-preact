import { h, render } from 'preact';
import { Square } from './Square';

export const Board = () => {
  const status = 'Next player: X';
  const row = 3;
  const column = 3;
  return (
    <div>
      <div className="status">{status}</div>
        {[...Array(row)].map((_, i) => {  // _：値を使用しない
          return (
            <div className="board-row" key={i}>
              {[...Array(column)].map((_, j) => {
                const index = i * 3 + j;
                return (
                  <Square value={index} key={index} />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
