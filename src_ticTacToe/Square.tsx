import { h, render } from 'preact';
import { squarable } from './interface';

type squareProps = {
  value: squarable,
  // 引数つきスイッチには、押すときに起こるイベントの型だけつければいい
  handleClick: (event: MouseEvent) => void,
};

export const Square = (props: squareProps) => { 
  return (
    <button className="square"
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  );
}
