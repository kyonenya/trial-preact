import { h, render } from 'preact'; 

import { checkTodoable, deleteTodoable } from './App';
import { TodoItem } from './TodoItem';
import { /* todosModel, */todoModelable } from './todosModel';

/**
 * 
 * 
 * 
 */
type TodoListProps = {
  todos: todoModelable[], 
  checkTodo: checkTodoable,
  deleteTodo: deleteTodoable,
}
export const TodoList = (props: TodoListProps) => {

  const todos = props.todos.map(todo => {
    return (
      <TodoItem 
        key={todo.id}
        todo={todo}
        checkTodo={props.checkTodo}
        deleteTodo={props.deleteTodo}
      />
    );
  });
  
  return (
    <ul>
      {props.todos.length > 0 
        ? todos
        // タスクが空のときの表示
        : <p>するべきことは何もない</p>
      }
    </ul>
  );
}