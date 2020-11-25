import { h } from 'preact';
export const Square = ({ square, onClick }) => (h("button", { className: "square", type: "button", onClick: () => onClick() }, square));
