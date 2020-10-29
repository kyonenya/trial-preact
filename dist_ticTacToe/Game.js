import { h } from 'preact';
import { Board } from './Board';
export const Game = () => {
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, null)),
        h("div", { className: "game-info" },
            h("div", null),
            h("ol", null))));
};
