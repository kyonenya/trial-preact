import { h } from 'preact';
import { Home, SiteMap } from './components/pages';
import { Route, Link } from 'wouter';
export const App = () => {
    return (h("div", null,
        h(Link, { href: "/sitemap" }, "SiteMap"),
        h(Route, { path: "/" },
            h(Home, null)),
        h(Route, { path: "/sitemap" },
            h(SiteMap, null))));
};
