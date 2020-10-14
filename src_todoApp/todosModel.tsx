export interface todoModelable {
  id: number,
  title: string,
  isDone: boolean,
}

export const todosModel: todoModelable[] = [
  {id: 0, title: 'タスク0', isDone: false},
  {id: 1, title: 'タスク1', isDone: false},
  {id: 2, title: 'タスク2', isDone: true},
];