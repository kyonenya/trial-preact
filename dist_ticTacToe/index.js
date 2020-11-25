import { h, render } from 'preact';
import { Game } from './Game';
render(h(Game, null), 
/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
document.getElementById('root') // comma-dangle
);
