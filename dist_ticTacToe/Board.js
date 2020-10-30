import { h } from 'preact';
import { Square } from './Square';
export const Board = () => {
    const status = 'Next player: X';
    const row = 3;
    const column = 3;
    return (h("div", null,
        h("div", { className: "status" }, status),
        [...Array(row)].map((_, i) => {
            return (h("div", { className: "board-row", key: i }, [...Array(column)].map((_, j) => {
                const index = i * 3 + j;
                return (h(Square, { value: index, key: index }));
            })));
        })));
};
