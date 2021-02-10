import { h, render } from 'preact'; 

import { todoModelable } from './todosModel';
import { purgeable } from './App';

type TodoHeaderProps = {
  todos: todoModelable[],
  purge: purgeable,
}
export const TodoHeader = (props: TodoHeaderProps) => {
  
  const remaining = props.todos.filter(todo => {
    return !todo.isDone;
  });
  
  return (
    <h1>
      <button
        onClick={props.purge}
      >完了済を削除</button>
      My Todos
      <span>({remaining.length}/{props.todos.length})</span>
    </h1>
  );
}