import { h } from 'preact';
import { useState } from 'preact/hooks';
import { todosModel } from './todosModel';
import { TodoList } from './TodoList';
/**
 *
 *
 * @state todos: {id, title, isDone}[]
 */
export const App = () => {
    const [todos, setTodos] = useState(todosModel);
    const checkTodo = (todo) => {
        // setStateは (prevState) => newState の形で書く
        setTodos(prevTodos => {
            // スプレッド構文でオブジェクトのコピーをとる
            const todos = [...prevTodos];
            const pos = todos.map(todo => {
                return todo.id;
            }).indexOf(todo.id);
            // トグルする
            todos[pos].isDone = !todos[pos].isDone;
            return todos;
        });
    };
    const deleteTodo = (todo) => {
        setTodos(prevTodos => {
            // 確認をとる
            if (!confirm('本当に削除しますか？')) {
                return prevTodos;
            }
            // 浅いコピーをとる
            const todos = prevTodos.slice();
            const pos = prevTodos.indexOf(todo);
            // 当該番目のTodoアイテムモデルを削除する
            todos.splice(pos, 1);
            return todos;
        });
    };
    return (h("div", null,
        h("h2", null, "My Todos"),
        h(TodoList, { todos: todos, checkTodo: checkTodo, deleteTodo: deleteTodo })));
};
