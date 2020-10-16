import { h } from 'preact';
import { TodoItem } from './TodoItem';
export const TodoList = (props) => {
    const todos = props.todos.map(todo => {
        return (h(TodoItem, { key: todo.id, todo: todo, checkTodo: props.checkTodo, deleteTodo: props.deleteTodo }));
    });
    return (h("ul", null, props.todos.length > 0
        ? todos
        // タスクが空のときの表示
        : h("p", null, "\u3059\u308B\u3079\u304D\u3053\u3068\u306F\u4F55\u3082\u306A\u3044")));
};
