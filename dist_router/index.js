import { h, render } from 'preact';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
render(h(BrowserRouter, null,
    h(App, null)), document.getElementById('root'));
