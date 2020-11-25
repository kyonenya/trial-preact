import { h, FunctionComponent } from 'preact';
import { squarable } from './types';

type squareProps = {
  square: squarable,
};

export const Square: FunctionComponent<squareProps> = ({ square }: squareProps) => (
  <button className="square" type="button">
    {square}
  </button>
);
