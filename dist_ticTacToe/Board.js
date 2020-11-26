import { h } from 'preact';
import { Square } from './Square';
export const Board = ({ squares, onClick }) => {
    const status = 'Next player: X';
    return (h("div", null,
        h("div", { className: "status" }, status),
        [...Array(3).keys()].map((i) => (h("div", { className: "board-row" }, [...Array(3).keys()].map((j) => {
            const index = i * 3 + j;
            return (h(Square, { square: squares[index], onClick: () => onClick(index), key: index }));
        }))))));
};
