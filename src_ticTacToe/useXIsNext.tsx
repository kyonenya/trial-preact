import { useState } from 'preact/hooks';

export const useXIsNext = (): [boolean, () => void] => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const nextTurn = (): void => {
    setXIsNext(prev => !prev);
  }

  return [xIsNext, nextTurn];
}
