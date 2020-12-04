import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
import { Moves } from './Moves';
import { useXIsNext } from './useXIsNext';
import { useStepNum } from './useStepNum';
export const Game = () => {
    const [histories, setHistories] = useState([
        {
            squares: Array(9).fill(null),
            location: { col: null, row: null },
        },
    ]);
    const [xIsNext, switchTurn, jumpTurn] = useXIsNext();
    const [stepNum, nextStep, jumpStep] = useStepNum();
    const winner = calculateWinner(histories[stepNum].squares);
    const handleClick = (index) => {
        if (winner)
            return;
        if (histories[stepNum].squares[index])
            return; // if already clicked
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
        nextStep();
        switchTurn();
    };
    const jumpTo = (stepNum) => {
        jumpStep(stepNum);
        jumpTurn(stepNum);
    };
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, { squares: histories[stepNum].squares, onClick: (index) => handleClick(index) })),
        h("div", { className: "game-info" },
            h("div", null, winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`),
            h(Moves, { histories: histories, jumpTo: jumpTo }))));
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
            return squares[a];
        }
    }
    return null;
};
