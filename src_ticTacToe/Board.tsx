import { h, render } from 'preact';
import { Square } from './Square';
import { useState } from 'preact/hooks';

export const Board = () => {
  const status = 'Next player: X';
  const row = 3;
  const column = 3;

  const [squares, setSquares] = useState(Array(row * column).fill(null));  // [null, null, ...]
  const handleClick = (index: any) => {
    setSquares((prevSquares) => {
      const squares = prevSquares.slice();
      squares[index] = 'X';
      
      return squares;
    });
  }

  return (
    <div>
      <div className="status">{status}</div>
        {[...Array(row).keys()].map((i) => {  // [0, 1, 2].map()
          return (
            <div className="board-row" key={i}>
              {[...Array(column).keys()].map((j) => {
                const index = i * 3 + j;
                return (
                  <Square
                    value={squares[index]}
                    handleClick={() => handleClick(index)}
                    key={index} 
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
