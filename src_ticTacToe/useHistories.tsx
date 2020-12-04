import { useState } from 'preact/hooks';
import { squarable, historable } from './types';

export const useHistories = (): [
  histories: historable[],
  updateHistories: (stepNum: number, index: number, xIsNext: boolean) => void,
] => {
  const [histories, setHistories] = useState<historable[]>([
    {
      squares: Array<squarable>(9).fill(null), // generics
      location: { col: null, row: null },
    },
  ]);
  const updateHistories = (stepNum: number, index: number, xIsNext: boolean): void => {
    setHistories((histories) => {
      // cut off old histories if jumped
      const prevHistories = histories.slice(0, stepNum + 1);
      const col = index % 3 + 1;
      const row = Math.floor(index / 3) + 1;
      const squares = [...prevHistories[stepNum].squares];
      // update clicked square
      squares[index] = xIsNext ? 'X' : 'O';
      
      return [...prevHistories, {
        squares,
        location: { col, row },
      }];
    });
  }
  
  return [histories, updateHistories];
};
