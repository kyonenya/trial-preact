import { useState } from 'preact/hooks';

export const useTurn = (): [boolean, () => void, (stepNum: number) => void] => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const switchTurn = (): void => {
    setXIsNext((prev) => !prev);
  };
  const jumpTurn = (stepNum: number): void => {
    setXIsNext(() => stepNum % 2 === 0);
  };

  return [xIsNext, switchTurn, jumpTurn];
};
