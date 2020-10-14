import { h, render } from 'preact';
const App = () => {
    return h("h2", null, "\u3053\u3093\u306B\u3061\u306F\u3001preact");
};
render(h(App, null), document.getElementById('root'));
