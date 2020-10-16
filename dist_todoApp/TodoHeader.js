import { h } from 'preact';
export const TodoHeader = (props) => {
    const remaining = props.todos.filter(todo => {
        return !todo.isDone;
    });
    return (h("h1", null,
        h("button", { onClick: props.purge }, "\u5B8C\u4E86\u6E08\u3092\u524A\u9664"),
        "My Todos",
        h("span", null,
            "(",
            remaining.length,
            "/",
            props.todos.length,
            ")")));
};
