import { h, render } from 'preact'; 
import { useState } from 'preact/hooks'; 

import { todosModel, todoModelable } from './todosModel';
import { TodoList } from './TodoList';

// 呼び出し可能オブジェクトによって関数に型付けする
export interface checkTodoable {
  (todo: todoModelable): void;
}
export interface deleteTodoable {
  (todo: todoModelable): void;
}

/**
 * 
 * 
 * @state todos: {id, title, isDone}[]
 */
export const App = () => {
  const [todos, setTodos] = useState(todosModel);

  const checkTodo: checkTodoable = (todo) => {
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
  }
  
  const deleteTodo: deleteTodoable = (todo) => {
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
    })
  }
  
  return (
    <div>
      <h2>My Todos</h2>
      <TodoList 
        todos={todos}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}