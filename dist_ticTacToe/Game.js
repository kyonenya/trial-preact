import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
export const Game = () => {
    const [histories, setHistories] = useState([
        { squares: Array(9).fill('X') },
    ]);
    const [xIsNext, setXIsNext] = useState(true);
    const handleClick = (index) => {
        setHistories((prevHistories) => {
            const squares = [...prevHistories[prevHistories.length - 1].squares];
            // update clicked square
            squares[index] = xIsNext ? 'X' : 'O';
            return [...prevHistories, { squares }];
        });
        setXIsNext((prev) => !prev);
    };
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, { squares: histories[histories.length - 1].squares, onClick: (index) => handleClick(index) })),
        h("div", { className: "game-info" },
            h("div", null),
            h("ol", null))));
};
