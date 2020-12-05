import { h } from 'preact';
export const Moves = ({ histories, jumpTo }) => {
    return (h("ol", null, histories.map((aHistory, num) => {
        return (h("li", null,
            h("button", { onClick: () => jumpTo(num) }, num !== 0
                ? `#${num.toString()} col:${aHistory.location.col.toString()} row:${aHistory.location.row.toString()}`
                : `Go to game start`)));
    })));
};
