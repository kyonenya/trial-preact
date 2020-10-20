import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
export const Timer = (props) => {
    const [timeLeft, setTimeLeft] = useState(props.limit);
    const reset = () => setTimeLeft(props.limit);
    const tick = () => setTimeLeft((t) => t - 1);
    useEffect(() => {
        const timerId = setInterval(tick, 1000);
        // クリーンアップスイッチを返す（ComponentWillUnmount）
        return () => clearInterval(timerId);
    }, []); // 第二引数に空配列を渡すとcomponentDidMount（初回マウント直後に実行）
    // 第二引数を省略すればcomponentDidUpdate（アップデート時から実行）
    useEffect(() => {
        // 残り時間が0になったらリセットする
        if (timeLeft === 0)
            setTimeLeft(props.limit);
    });
    return (h("div", { className: "container" },
        h("p", null, "\u6B8B\u308A\u6642\u9593"),
        h("p", null, timeLeft),
        h("button", { onClick: reset }, "\u30EA\u30BB\u30C3\u30C8")));
};
