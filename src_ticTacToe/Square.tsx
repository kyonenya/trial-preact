import { h, render } from 'preact';

type squareProps = {
  value: string,
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
