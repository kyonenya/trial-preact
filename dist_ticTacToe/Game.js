import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Board } from './Board';
export const Game = () => {
    const [histories, setHistories] = useState([
        { squares: Array(9).fill(null) } // generics
    ]);
    const [xIsNext, setXIsNext] = useState(true);
    const handleClick = (stepNumber) => {
    };
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, null)),
        h("div", { className: "game-info" },
            h("div", null),
            h("ol", null))));
};
