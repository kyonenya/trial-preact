import { useState } from 'preact/hooks';
export const useXIsNext = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const nextTurn = () => {
        setXIsNext(prev => !prev);
    };
    return [xIsNext, nextTurn];
};
