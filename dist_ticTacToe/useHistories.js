import { useState } from 'preact/hooks';
export const useHistories = () => {
    const [histories, setHistories] = useState([
        {
            squares: Array(9).fill(null),
            location: { col: null, row: null },
        },
    ]);
    const updateHistories = (stepNum, index, xIsNext) => {
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
    };
    return [histories, updateHistories];
};
