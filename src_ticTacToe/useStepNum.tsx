import { useState } from 'preact/hooks';

export const useStepNum = (): [
  stepNum: number,
  nextStep: () => void,
  jumpStep: (stepNum: number) => void,
] => {
  const [stepNum, setStepNum] = useState<number>(0);
  const nextStep = (): void => {
    setStepNum(prev => prev + 1);
  };
  const jumpStep = (stepNum: number): void => {
    setStepNum(() => stepNum);
  };

  return [stepNum, nextStep, jumpStep];
};
