import { h, render, Component } from 'preact';
import { Game } from './Game';

render(
  <Game />,
  document.getElementById('root')!, // comma-dangle
);
