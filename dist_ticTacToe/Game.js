import { h } from 'preact';
import { Board } from './Board';
import { Moves } from './Moves';
import { useHistories } from './useHistories';
import { useTurn } from './useTurn';
import { useStepNum } from './useStepNum';
export const Game = () => {
    const [histories, updateHistories] = useHistories();
    const [xIsNext, switchTurn, jumpTurn] = useTurn();
    const [stepNum, nextStep, jumpStep] = useStepNum();
    const winner = calculateWinner(histories[stepNum].squares);
    const handleClick = (index) => {
        if (winner)
            return;
        if (histories[stepNum].squares[index])
            return; // if already clicked
        updateHistories(stepNum, index, xIsNext);
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
