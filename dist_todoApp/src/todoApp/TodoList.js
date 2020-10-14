import { h } from 'preact';
import { TodoItem } from './TodoItem';
export const TodoList = (props) => {
    const todos = props.todos.map(todo => {
        return (h(TodoItem, { key: todo.id, todo: todo, checkTodo: props.checkTodo, deleteTodo: props.deleteTodo }));
    });
    return (h("ul", null, todos));
};
