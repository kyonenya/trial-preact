import { h, render } from 'preact';
import { HooksTimer } from './HooksTimer';
render(h(HooksTimer, { limit: 15 }), document.querySelector('#root'));
