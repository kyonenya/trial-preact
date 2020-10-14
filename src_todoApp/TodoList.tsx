import { h, render } from 'preact'; 

import { TodoItem } from './TodoItem';
import { /* todosModel, */todoModelable } from './todosModel';
import { checkTodoable, deleteTodoable } from './App';

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
      {todos}
    </ul>
  );
}