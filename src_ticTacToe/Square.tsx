import { h, FunctionComponent as FC } from 'preact';
import { squarable } from './types';

export const Square: FC<{
  square: squarable;
  onClick: () => void;
}> = ({ square, onClick }) => (
  <button className="square" type="button" onClick={() => onClick()}>
    {square}
  </button>
);
