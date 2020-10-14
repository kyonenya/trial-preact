import { h } from 'preact';
export const TodoItem = (props) => {
    return (h("li", { key: props.todo.id },
        h("label", null,
            h("input", { type: "checkbox", checked: props.todo.isDone, 
                // クリックイベントをAppのstateまで伝播させる
                // 引数にTodoアイテムモデル一個を持たせて親に渡す
                onChange: () => props.checkTodo(props.todo) }),
            h("span", { className: props.todo.isDone ? 'done' : '' }, props.todo.title)),
        h("span", { className: "cmd", 
            /* 削除イベント */
            onClick: () => props.deleteTodo(props.todo) }, "[x]")));
};
