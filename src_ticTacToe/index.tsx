import { h, render } from 'preact';
import { Game } from './Game';

render(
  <Game />,
  /* eslint-disable-nextt-line @typescript-eslint/no-non-null-assertion */
  document.getElementById('root')!, // comma-dangle
);
