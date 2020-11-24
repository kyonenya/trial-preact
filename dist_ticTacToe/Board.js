import { h } from 'preact';
import { Square } from './Square';
export const Board = (props) => {
    const row = 3;
    const column = 3;
    return (h("div", null,
        h("div", { className: "status" }, status),
        [...Array(row).keys()].map((i) => {
            return (h("div", { className: "board-row", key: i }, [...Array(column).keys()].map((j) => {
                const index = i * 3 + j;
                return (h(Square, { value: props.squares[index], 
                    // スイッチにあらかじめ引数をセットして渡す
                    onClick: () => props.onClick(index), key: index }));
            })));
        })));
};
