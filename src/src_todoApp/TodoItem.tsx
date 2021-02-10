import { h, render } from 'preact'; 

import { todoModelable } from './todosModel';
import { checkTodoable, deleteTodoable } from './App';


/**
 * 
 * 
 * 
 */
type TodoItemProps = {
  todo: todoModelable,
  checkTodo: checkTodoable,
  deleteTodo: deleteTodoable,
}
export const TodoItem = (props: TodoItemProps) => {
  return (
    <li key={props.todo.id}>
      <label>
        <input 
          type="checkbox" 
          checked={props.todo.isDone}
          // クリックイベントをAppのstateまで伝播させる
          // 引数にTodoアイテムモデル一個を持たせて親に渡す
          onChange={() => props.checkTodo(props.todo)}
        />
        {/* チェック済にのみcssクラスを適用 */}
        <span 
          className={props.todo.isDone ? 'done' : ''}
        >
          {props.todo.title}
        </span>
      </label>
      <span 
        className="cmd"
        /* 削除イベント */
        onClick={() => props.deleteTodo(props.todo)}
      >
        [x]
      </span>
    </li>
  );
}