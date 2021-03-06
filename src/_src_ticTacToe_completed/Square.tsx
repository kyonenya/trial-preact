import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { squarable } from './interface';

type squareProps = {
  value: squarable,
  // 引数つきスイッチには、押すときに起こるイベントの型だけつける
  onClick: (event: MouseEvent) => void,
};

export const Square = (props: squareProps) => { 
  return (
    <button className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
