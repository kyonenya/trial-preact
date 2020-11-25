import { h } from 'preact';
import { Square } from './Square';
export const Board = (props) => {
    const status = 'Next player: X';
    return (h("div", null,
        h("div", { className: "status" }, status),
        [...Array(3).keys()].map((i) => (h("div", { className: "board-row" }, [...Array(3).keys()].map((j) => (h(Square, { square: props.squares[i * 3 + j], key: i * 3 + j }))))))));
};
