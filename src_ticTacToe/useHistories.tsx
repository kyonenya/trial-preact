import { useState } from 'preact/hooks';
import { squarable, historable } from './types';

export const useHistories = (): [
  histories: historable[],
  updateHistories: (stepNum: number, index: number, xIsNext: boolean) => void,
  winnerOf: (stepNum: number) => squarable
] => {
  const [histories, setHistories] = useState<historable[]>([
    {
      squares: Array<squarable>(9).fill(null), // generics
      location: { col: null, row: null },
    },
  ]);

  const updateHistories = (
    stepNum: number,
    index: number,
    xIsNext: boolean
  ): void => {
    setHistories((histories) => {
      // cut off old histories if jumped
      const prevHistories = histories.slice(0, stepNum + 1);
      const squares = [...prevHistories[stepNum].squares];
      // update clicked square
      squares[index] = xIsNext ? 'X' : 'O';

      return [
        ...prevHistories,
        {
          squares,
          location: {
            col: (index % 3) + 1,
            row: Math.floor(index / 3) + 1,
          },
        },
      ];
    });
  };

  const winnerOf = (stepNum: number) =>
    calculateWinner(histories[stepNum].squares);

  return [histories, updateHistories, winnerOf];
};

const calculateWinner = (squares: squarable[]): squarable => {
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
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
