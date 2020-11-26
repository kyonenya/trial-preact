import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
export const Game = () => {
    const [histories, setHistories] = useState([
        { squares: Array(9).fill(null) },
    ]);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(histories[histories.length - 1].squares);
    const handleClick = (index) => {
        if (winner)
            return;
        setHistories((prevHistories) => {
            const squares = [...prevHistories[prevHistories.length - 1].squares];
            // update clicked square
            squares[index] = xIsNext ? 'X' : 'O';
            return [...prevHistories, { squares }];
        });
        setXIsNext((prev) => !prev);
    };
    const status = winner
        ? `Winner: ${winner}`
        : `Next player: ${xIsNext ? 'X' : 'O'}`;
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, { squares: histories[histories.length - 1].squares, onClick: (index) => handleClick(index) })),
        h("div", { className: "game-info" },
            h("div", null, status),
            h("ol", null))));
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};
