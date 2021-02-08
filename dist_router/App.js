import { h, Fragment } from 'preact';
import { Route, Switch } from 'react-router';
export const App = () => {
    return (h(Fragment, null,
        h(Switch, null,
            h(Route, { path: "/" },
                h("h2", null, "Home")),
            h(Route, { path: "/works" },
                h("h2", null, "Works")),
            h(Route, null,
                h("h2", null, "404")))));
};
