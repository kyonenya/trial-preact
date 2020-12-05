import { h } from 'preact';
import { Square } from './Square';
export const Board = ({ squares, winIndexes, onClick }) => {
    return (h("div", null, [...Array(3).keys()].map((i) => (h("div", { className: "board-row" }, [...Array(3).keys()].map((j) => {
        const index = i * 3 + j;
        return (h(Square, { square: squares[index], isWinIndex: winIndexes ? winIndexes.indexOf(index) !== -1 : false, onClick: () => onClick(index), key: index }));
    }))))));
};
