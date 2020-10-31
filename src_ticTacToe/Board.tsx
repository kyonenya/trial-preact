import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Square } from './Square';
import { squarable } from './interface';

export const Board = () => {
  const status = 'Next player: X';
  const row = 3;
  const column = 3;
  
  // useStateはジェネリクスをつけて呼べば、分割代入している左辺も型付けされる
  const [squares, setSquares] = useState<squarable[]>(Array(row * column).fill(null));  // [null, null, ...]
  const handleClick = (index: number) => {
    setSquares((prevSquares: squarable[]) => {
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
