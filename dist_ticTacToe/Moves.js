import { h } from 'preact';
export const Moves = ({ histories }) => {
    return (h("ol", null, histories.map((aHistory, num) => {
        return (h("li", null,
            h("button", null, num !== 0
                ? `#${num} col:${aHistory.location.col} row:${aHistory.location.col}`
                : `Go to game start`)));
    })));
};
