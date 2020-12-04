import { useState } from 'preact/hooks';
export const useTurn = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const switchTurn = () => {
        setXIsNext((prev) => !prev);
    };
    const jumpTurn = (stepNum) => {
        setXIsNext(() => stepNum % 2 === 0);
    };
    return [xIsNext, switchTurn, jumpTurn];
};
