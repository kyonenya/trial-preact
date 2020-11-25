import { h, FunctionComponent } from 'preact';
import { squarable } from './types';

type squareProps = {
  square: squarable,
  key: number,
};

export const Square: FunctionComponent<squareProps> = (props: squareProps) => {
  return (
    <button className="square" type="button">
      {props.square}
    </button>
  );
};
