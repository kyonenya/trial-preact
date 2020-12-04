import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
import { Moves } from './Moves';
import { useXIsNext } from './useXIsNext';
export const Game = () => {
    const [histories, setHistories] = useState([
        {
            squares: Array(9).fill(null),
            location: { col: null, row: null },
        },
    ]);
    const [xIsNext, nextTurn] = useXIsNext();
    const [stepNum, setStepNum] = useState(0);
    /** get current squares */
    const squaresFor = (histories) => histories.slice(-1)[0].squares;
    const winner = calculateWinner(squaresFor(histories));
    const handleClick = (index) => {
        const col = index % 3 + 1;
        const row = Math.floor(index / 3) + 1;
        if (winner)
            return;
        if (squaresFor(histories)[index])
            return; // if already clicked
        setHistories((prevHistories) => {
            const squares = [...squaresFor(prevHistories)];
            // update clicked square
            squares[index] = xIsNext ? 'X' : 'O';
            return [...prevHistories, {
                    squares,
                    location: { col, row },
                }];
        });
        setStepNum(prev => prev + 1);
        nextTurn();
    };
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, { squares: histories[stepNum].squares, onClick: (index) => handleClick(index) })),
        h("div", { className: "game-info" },
            h("div", null, winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`),
            h(Moves, { histories: histories }))));
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
