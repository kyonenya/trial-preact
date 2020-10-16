import { h } from 'preact';
export const TodoForm = (props) => {
    return (h("form", { onSubmit: props.addTodo },
        h("input", { type: "text", 
            // ユーザーが入力した値ではなく、親から渡ってきた値をそのまま表示する
            value: props.item, 
            // ユーザーの入力はリアルタイムに差分検知していったん親に渡す
            onChange: props.updateItem }),
        h("input", { type: "submit", value: "add" })));
};
