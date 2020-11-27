import { h } from 'preact';
export const Moves = ({ histories }) => {
    return (h("ol", null, histories.map((aHistory, num) => {
        return (h("li", null,
            h("button", null, num !== 0
                ? `Go to move # ${num}`
                : `Go to game start`)));
    })));
};
