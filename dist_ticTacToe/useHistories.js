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
            const squares = [...prevHistories[stepNum].squares];
            // update clicked square
            squares[index] = xIsNext ? 'X' : 'O';
            return [
                ...prevHistories,
                {
                    squares,
                    location: {
                        col: (index % 3) + 1,
                        row: Math.floor(index / 3) + 1,
                    },
                },
            ];
        });
    };
    const getWinner = (stepNum) => calculateWinner(histories[stepNum].squares);
    return [histories, updateHistories, getWinner];
};
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                indexes: lines[i],
            };
        }
    }
    return null;
};
