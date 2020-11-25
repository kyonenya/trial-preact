import { h } from 'preact';
import { Square } from './Square';
export const Board = () => {
    const status = 'Next player: X';
    return (h("div", null,
        h("div", { className: "status" }, status),
        h("div", { className: "board-row" },
            h(Square, null),
            h(Square, null),
            h(Square, null)),
        h("div", { className: "board-row" },
            h(Square, null),
            h(Square, null),
            h(Square, null)),
        h("div", { className: "board-row" },
            h(Square, null),
            h(Square, null),
            h(Square, null))));
};
