import { h, render } from 'preact';
import { squarable } from './interface';

type squareProps = {
  value: squarable,
  handleClick: any,
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
