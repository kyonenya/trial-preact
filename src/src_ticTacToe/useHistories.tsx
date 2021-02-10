import { useState } from 'preact/hooks';
import { squarable, historable } from './types';

export const useHistories = (): [
  histories: historable[],
  updateHistories: (index: number, stepNum: number, isXTurn: boolean) => void,
  winnerOf: (stepNum: number) => { winner: squarable; indexes: number[] } | null
] => {
  const [histories, setHistories] = useState<historable[]>([
    {
      squares: Array<squarable>(9).fill(''), // generics
      location: { col: 0, row: 0 },
    },
  ]);

  const updateHistories = (
    index: number,
    stepNum: number,
    isXTurn: boolean
  ): void => {
    setHistories((histories) => {
      // cut off old histories if jumped
      const prevHistories = histories.slice(0, stepNum + 1);
      const squares = [...prevHistories[stepNum].squares];
      // update clicked square
      squares[index] = isXTurn ? 'X' : 'O';

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

  const getWinner = (stepNum: number) =>
    calculateWinner(histories[stepNum].squares);

  return [histories, updateHistories, getWinner];
};

const calculateWinner = (
  squares: squarable[]
): {
  winner: squarable;
  indexes: number[];
} | null => {
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
      return {
        winner: squares[a],
        indexes: lines[i],
      };
    }
  }
  return null;
};
