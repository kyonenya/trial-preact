import { h, FunctionComponent } from 'preact';
import { squarable } from './types';

export const Square: FunctionComponent<{
  square: squarable;
  onClick: () => void;
}> = ({ square, onClick }) => (
  <button className="square" type="button" onClick={() => onClick()}>
    {square}
  </button>
);
