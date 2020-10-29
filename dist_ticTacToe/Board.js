import { h } from 'preact';
import { Square } from './Square';
export const Board = () => {
    const status = 'Next player: X';
    return (h("div", null,
        h("div", { className: "status" }, status),
        h("div", { className: "board-row" },
            "// 0-2",
            h(Square, null),
            h(Square, null),
            h(Square, null))
    // 3-5
    ,
        "// 3-5",
        h("div", { className: "board-row" },
            h(Square, null),
            h(Square, null),
            h(Square, null))
    // 6-8
    ,
        "// 6-8",
        h("div", { className: "board-row" },
            h(Square, null),
            h(Square, null),
            h(Square, null))));
};
