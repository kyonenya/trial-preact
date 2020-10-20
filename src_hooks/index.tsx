import { h, render } from 'preact'; 
import { LegacyTimer } from './LegacyTimer';
import { Timer } from './Timer';
import { HooksTimer } from './HooksTimer';

render(
  <HooksTimer
    limit={15}
  />,
  document.querySelector('#root')!
);