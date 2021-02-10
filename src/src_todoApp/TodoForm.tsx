import { h, render } from 'preact'; 

import { updateItemable, addTodoable } from './App';

type TodoFormProps = {
  item: string,
  updateItem: updateItemable,
  addTodo: addTodoable,
}
export const TodoForm = (props: TodoFormProps) => {
  return (
    <form
      onSubmit={props.addTodo}
    >
      <input type="text" 
        // ユーザーが入力した値ではなく、親から渡ってきた値をそのまま表示する
        value={props.item}
        // ユーザーの入力はリアルタイムに差分検知していったん親に渡す
        onChange={props.updateItem}
      />
      <input type="submit" value="add" />
    </form>
  );
}