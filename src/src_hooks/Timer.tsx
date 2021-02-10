import { h } from 'preact'; 
import { useState, useEffect } from 'preact/hooks'; 

type TimerProps = {
  limit: number
};

export const Timer = (props: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(props.limit);
  const reset = () => setTimeLeft(props.limit);
  const tick = () => setTimeLeft((t) => t -1);
  
  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    // クリーンアップスイッチを返す（ComponentWillUnmount）
    return () => clearInterval(timerId);
  }, []);  // 第二引数に空配列を渡すとcomponentDidMount（初回マウント直後に実行）
  // 第二引数を省略すればcomponentDidUpdate（アップデート時から実行）
  
  useEffect(()=> {
    // 残り時間が0になったらリセットする
    if(timeLeft === 0) setTimeLeft(props.limit);
  })

  return (
    <div className="container">
      <p>残り時間</p>
      <p>{ timeLeft }</p>
      <button
        onClick={reset}
      >
        リセット
      </button>
    </div>
  );
}