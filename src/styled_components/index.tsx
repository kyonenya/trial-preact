import { h, render } from 'preact';
import { App } from './App';

render(
  <App isPrimary={true}/>,
  document.getElementById('root')!
);
