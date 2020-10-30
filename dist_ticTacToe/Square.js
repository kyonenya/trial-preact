import { h } from 'preact';
import { useState } from 'preact/hooks';
export const Square = (props) => {
    const [value, setValue] = useState(props.value);
    const check = () => {
        setValue('X');
    };
    return (h("button", { className: "square", onClick: check }, value));
};
