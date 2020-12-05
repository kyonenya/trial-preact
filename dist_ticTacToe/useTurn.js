import { useState } from 'preact/hooks';
export const useTurn = () => {
    const [isXTurn, setTurn] = useState(true);
    const switchTurn = () => {
        setTurn((prev) => !prev);
    };
    const jumpTurn = (stepNum) => {
        setTurn(() => stepNum % 2 === 0);
    };
    return [isXTurn, switchTurn, jumpTurn];
};
