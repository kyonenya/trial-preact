import { h } from 'preact';
export const Square = (props) => {
    return (h("button", { className: "square", type: "button" }, props.square));
};
