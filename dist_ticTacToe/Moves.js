import { h } from 'preact';
export const Moves = ({ histories, jumpTo }) => {
    return (h("ol", null, histories.map((aHistory, num) => {
        return (h("li", null,
            h("button", { onClick: () => jumpTo(num) }, num !== 0
                ? `#${num} col:${aHistory.location.col} row:${aHistory.location.row}`
                : `Go to game start`)));
    })));
};
