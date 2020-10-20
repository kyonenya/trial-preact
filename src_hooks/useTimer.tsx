import { h } from 'preact'; 
import { useState, useEffect } from 'preact/hooks'; 

export const useTimer = (limit: number): [number, () => void] => {
  //-----
  const [timeLeft, setTimeLeft] = useState(limit);
  const reset = () => setTimeLeft(limit);
  const tick = () => setTimeLeft((t) => t -1);
  
  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    
    return () => clearInterval(timerId);
  }, []);
  
  useEffect(()=> {
    if(timeLeft === 0) setTimeLeft(limit);
  }, [timeLeft, limit]);  // 依存配列を渡して無限ループを防ぐ
  //-----
  
  // 返り値をタプルで返す、分割代入で受け取る
  return [timeLeft, reset];
}