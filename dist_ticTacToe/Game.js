import { h } from 'preact';
import { Board } from './Board';
import { Moves } from './Moves';
import { useHistories } from './useHistories';
import { useTurn } from './useTurn';
import { useStepNum } from './useStepNum';
export const Game = () => {
    const [histories, updateHistories, winnerOf] = useHistories();
    const [xIsNext, switchTurn, jumpTurn] = useTurn();
    const [stepNum, nextStep, jumpStep] = useStepNum();
    const handleClick = (index) => {
        if (winnerOf(stepNum))
            return;
        if (histories[stepNum].squares[index])
            return; // if already clicked
        updateHistories(stepNum, index, xIsNext);
        nextStep();
        switchTurn();
    };
    const jumpTo = (stepNum) => {
        jumpStep(stepNum);
        jumpTurn(stepNum);
    };
    return (h("div", { className: "game" },
        h("div", { className: "game-board" },
            h(Board, { squares: histories[stepNum].squares, onClick: (index) => handleClick(index) })),
        h("div", { className: "game-info" },
            h("div", null, winnerOf(stepNum) ? `Winner: ${winnerOf(stepNum)}` : `Next player: ${xIsNext ? 'X' : 'O'}`),
            h(Moves, { histories: histories, jumpTo: jumpTo }))));
};
