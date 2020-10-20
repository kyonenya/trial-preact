import { h } from 'preact'; 
import { useState, useEffect } from 'preact/hooks'; 

import { useTimer } from './useTimer';

type TimerProps = {
  limit: number
};

export const HooksTimer = (props: TimerProps) => {
  // カスタムフックから計算結果の変数やスイッチとなる関数を受け取る
  const [timeLeft, reset] = useTimer(props.limit);

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