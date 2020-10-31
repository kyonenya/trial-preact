import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Square } from './Square';
export const Board = () => {
    const status = 'Next player: X';
    const row = 3;
    const column = 3;
    // useStateはジェネリクスをつけて呼べば、分割代入している左辺も型付けされる
    const [squares, setSquares] = useState(Array(row * column).fill(null)); // [null, null, ...]
    const handleClick = (index) => {
        setSquares((prevSquares) => {
            const squares = prevSquares.slice();
            squares[index] = 'X';
            return squares;
        });
    };
    return (h("div", null,
        h("div", { className: "status" }, status),
        [...Array(row).keys()].map((i) => {
            return (h("div", { className: "board-row", key: i }, [...Array(column).keys()].map((j) => {
                const index = i * 3 + j;
                return (h(Square, { value: squares[index], handleClick: () => handleClick(index), key: index }));
            })));
        })));
};
