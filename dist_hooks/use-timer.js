import { useState, useEffect } from 'preact/hooks';
export const useTimer = (limit) => {
    //-----
    const [timeLeft, setTimeLeft] = useState(limit);
    const reset = () => setTimeLeft(limit);
    const tick = () => setTimeLeft((t) => t - 1);
    useEffect(() => {
        const timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, []);
    useEffect(() => {
        if (timeLeft === 0)
            setTimeLeft(limit);
    });
    //-----
    // タプルで返り値を書いてみる
    return [timeLeft, reset];
};
