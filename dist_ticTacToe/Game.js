import { h } from 'preact';
import { Board } from './Board';
import { Moves } from './Moves';
import { useHistories } from './useHistories';
import { useTurn } from './useTurn';
import { useStepNum } from './useStepNum';
export const Game = () => {
    var _a, _b;
    const [histories, updateHistories, getWinner] = useHistories();
    const [isXTurn, switchTurn, jumpTurn] = useTurn();
    const [stepNum, nextStep, jumpStep] = useStepNum();
    const handleClick = (index) => {
        if (getWinner(stepNum))
            return;
        if (histories[stepNum].squares[index])
            return; // if already clicked
        updateHistories(stepNum, index, isXTurn);
        nextStep();
        switchTurn();
    };
    const jumpTo = (stepNum) => {
        jumpStep(stepNum);
        jumpTurn(stepNum);
    };
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, { squares: histories[stepNum].squares, winIndexes: (_a = getWinner(stepNum)) === null || _a === void 0 ? void 0 : _a.indexes, onClick: (index) => handleClick(index) })),
        h("div", { className: "game-info" },
            h("div", null, getWinner(stepNum)
                ? `Winner: ${(_b = getWinner(stepNum)) === null || _b === void 0 ? void 0 : _b.winner.toString()}`
                : `Next player: ${isXTurn ? 'X' : 'O'}`),
            h(Moves, { histories: histories, jumpTo: jumpTo }))));
};
