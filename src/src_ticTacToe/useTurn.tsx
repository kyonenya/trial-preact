import { useState } from 'preact/hooks';

export const useTurn = (): [boolean, () => void, (stepNum: number) => void] => {
  const [isXTurn, setTurn] = useState<boolean>(true);

  const switchTurn = (): void => {
    setTurn((prev) => !prev);
  };
  const jumpTurn = (stepNum: number): void => {
    setTurn(() => stepNum % 2 === 0);
  };

  return [isXTurn, switchTurn, jumpTurn];
};
