import { h } from 'preact';
export const Square = (props) => {
    return (h("button", { className: "square", onClick: props.handleClick }, props.value));
};
