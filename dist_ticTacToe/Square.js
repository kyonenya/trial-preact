import { h } from 'preact';
export const Square = ({ square, isWinIndex, onClick }) => (h("button", { type: "button", className: !isWinIndex ? 'square' : 'square winIndex', onClick: () => onClick() }, square));
