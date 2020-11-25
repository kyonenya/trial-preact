import { h } from 'preact';
export const Square = ({ square, }) => (h("button", { className: "square", type: "button" }, square));
