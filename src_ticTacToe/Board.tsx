import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Square } from './Square';
import { squarable } from './interface';

export const Board = () => {
  const row = 3;
  const column = 3;
  
  // useStateはジェネリクスをつけて呼ぶ
  const [squares, setSquares] = useState<squarable[]>(Array(row * column).fill(null)); // [null, null, ...]
  // 手番（X→O→X→...）
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
  const handleClick = (index: number): void => {
    if (winner) return;
    
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

const calculateWinner = (squares: squarable[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
