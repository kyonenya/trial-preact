import { h } from 'preact';
/*
export const Square: FunctionalComponent = () => (
  <button className="square" type="button">
    {}
  </button>
);
*/
export const Square = () => {
    return (h("button", { className: "square", type: "button" }));
};
