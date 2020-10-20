import { h } from 'preact';
import { useTimer } from './useTimer';
export const TimerWithCustomHooks = (props) => {
    // カスタムフックから計算結果の変数やスイッチとなる関数を受け取る
    const [timeLeft, reset] = useTimer(props.limit);
    return (h("div", { className: "container" },
        h("p", null, "\u6B8B\u308A\u6642\u9593"),
        h("p", null, timeLeft),
        h("button", { onClick: reset }, "\u30EA\u30BB\u30C3\u30C8")));
};
