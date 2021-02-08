import { h, Fragment } from 'preact';
import { Link } from 'react-router-dom';
export const Anchors = () => {
    return (h(Fragment, null,
        "//@ts-ignore",
        h(Link, { to: "/works" }, "to Works")));
};
