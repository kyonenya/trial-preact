import { useState } from 'preact/hooks';
export const useStepNum = () => {
    const [stepNum, setStepNum] = useState(0);
    const nextStep = () => {
        setStepNum((prev) => prev + 1);
    };
    const jumpStep = (stepNum) => {
        setStepNum(() => stepNum);
    };
    return [stepNum, nextStep, jumpStep];
};
