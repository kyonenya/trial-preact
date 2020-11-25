import { h, FunctionComponent } from 'preact';
import { squarable } from './types';

type squareProps = {
  square: squarable;
  onClick: () => void;
};

export const Square: FunctionComponent<squareProps> = ({
  square, onClick,
}: squareProps) => (
  <button className="square" type="button" onClick={() => onClick()}>
    {square}
  </button>
);
