import { h, render } from 'preact';

const App = () => {
  return <h2>こんにちは、preact</h2>;
}

render(
  <App />,
  document.getElementById('root')!
);