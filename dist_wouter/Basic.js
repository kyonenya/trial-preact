import { h } from 'preact';
import { Link, Route } from "wouter";
const InboxPage = () => {
    return (h("h1", null, "Inbox"));
};
export const Basic = () => (h("div", null,
    h(Link, { href: "/users/1" },
        h("a", { className: "link" }, "Profile")),
    h(Route, { path: "/about" }, "About Us"),
    h(Route, { path: "/users/:name" }, (params) => h("div", null,
        "Hello, ",
        params.name,
        "!")),
    h(Route, { path: "/inbox", component: InboxPage })));
