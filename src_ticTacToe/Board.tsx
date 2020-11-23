import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Square } from './Square';
import { squarable, handleClickable } from './interface';

export const Board = () => {
  const status = 'Next player: X';
  const row = 3;
  const column = 3;
  
  // useStateはジェネリクスをつけて呼べば、分割代入している左辺も型付けされる
  const [squares, setSquares] = useState<squarable[]>(Array(row * column).fill(null)); // [null, null, ...]
  // 手番（X→O→X→...）
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  
  const handleClick = (index: number): void => {
    setSquares((prevSquares: squarable[]) => {
      const squares = prevSquares.slice();
      squares[index] = xIsNext
        ? 'X'
        : 'O';
      setXIsNext(!xIsNext);
      
      return squares;
    });
  }

  return (
    <div>
      <div className="status">{status}</div>
        {[...Array(row).keys()].map((i) => { // [0, 1, 2].map()
          return (
            <div className="board-row" key={i}>
              {[...Array(column).keys()].map((j) => {
                const index = i * 3 + j;
                return (
                  <Square
                    value={squares[index]}
                    // スイッチにあらかじめ引数をセットして渡す
                    onClick={() => handleClick(index)}
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
