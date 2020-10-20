import { h } from 'preact';
import { useState } from 'preact/hooks';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { todosModel } from './todosModel';
/**
 *
 *
 * @state todos: {id, title, isDone}[]
 */
export const App = () => {
    const [todos, setTodos] = useState(todosModel);
    // 入力フォームの状態も親が一元管理する
    const [item, setItem] = useState('');
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
    const updateItem = (e) => {
        setItem(() => {
            // 型アサーション：EventTarget型の推論を上書きする
            const eventTarget = e.target;
            return eventTarget.value;
        });
    };
    /*
    componentDidUpdate() {
      localStrage.setItem('todos', JSON.stringify(todos));
    }
    componentDidMount() {
      setTodos(JSON.parse(localStorage.getItem('todos'))||[]);
    }
    */
    const addTodo = (e) => {
        e.preventDefault();
        // 空文字をバリデーションして弾く
        if (item.trim() === '') {
            return;
        }
        const newTodo = {
            // UUIDを生成する
            id: getUniqueId(),
            title: item,
            isDone: false,
        };
        setTodos((prevTodos) => {
            const todos = prevTodos.slice();
            todos.push(newTodo);
            return todos;
        });
        // submitしたらフォームを空にする
        setItem('');
    };
    // UUIDを生成する
    const getUniqueId = () => {
        return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
    };
    const purge = () => {
        if (!confirm('完了済を全て削除しますか？')) {
            return;
        }
        const remainingTodos = todos.filter(todo => {
            return !todo.isDone;
        });
        setTodos(remainingTodos);
    };
    return (h("div", { className: 'container' },
        h(TodoHeader, { todos: todos, purge: purge }),
        h(TodoList, { todos: todos, checkTodo: checkTodo, deleteTodo: deleteTodo }),
        h(TodoForm, { item: item, updateItem: updateItem, addTodo: addTodo })));
};
