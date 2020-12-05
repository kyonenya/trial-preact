import { h } from 'preact';
export const Moves = ({ histories, jumpTo }) => {
    return (h("ol", null, histories.map((aHistory, num) => {
        var _a, _b;
        return (h("li", null,
            h("button", { onClick: () => jumpTo(num) }, num !== 0
                ? `#${num.toString()} col:${(_a = aHistory.location.col) === null || _a === void 0 ? void 0 : _a.toString()} row:${(_b = aHistory.location.row) === null || _b === void 0 ? void 0 : _b.toString()}`
                : `Go to game start`)));
    })));
};
