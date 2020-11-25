import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
import { squarable, historable } from './interface';

export const Game = () => {
  const row = 3;
  const column = 3;
  
  const [history, setHistory] 
    = useState<historable[]>([
      { squares: Array(row * column).fill(null) }
    ]); 
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);
  
  const winner = calculateWinner(history[stepNumber].squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
  const handleClick = (index: number): void => {
      const _history = history.slice(0, stepNumber + 1);
      const squares = _history[_history.length - 1].squares.slice();
      if (winner || squares[index]) return;
      
      squares[index] = xIsNext
        ? 'X'
        : 'O';

    setHistory(() => [..._history, { squares }]);
    setXIsNext(() => !xIsNext);
    setStepNumber(() => _history.length); // overwrite
  }
  
  const jumpTo = (step: number) => {
    setStepNumber(() => step);
    setXIsNext(() => (step % 2) === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={history[stepNumber].squares}
          onClick={(index: number) => handleClick(index)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{history.map((aHistory, index) => {
              return (
                <li key={index}>
                  <button onClick={() => jumpTo(index)}>
                    {
                      index
                        ? 'Go to move #' + index
                        : 'Go to game start'
                    }
                  </button>
                </li>
              );
            })}
          </ol>
      </div>
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
