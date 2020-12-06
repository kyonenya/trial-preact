import { h, FunctionComponent as FC } from 'preact';
import { squarable } from './types';

export const Square: FC<{
  square: squarable;
  isWinIndex: boolean;
  onClick: () => void;
}> = ({ square, isWinIndex, onClick }) => (
  <button
    type="button"
    className={!isWinIndex ? 'square' : 'square-winIndex'}
    onClick={() => onClick()}
  >
    {square}
  </button>
);
