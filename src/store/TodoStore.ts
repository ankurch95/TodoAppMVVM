import {TodoStateType} from '../types/stateTypes';

const TodoStore: TodoStateType = {
  fetchingTodos: false,
  todos:  [],

  creatingTodo: false,
  createTodoSuccess: false,
  createTodoError: false,

  updatingTodo: false,
  updateTodoSuccess: false,
  updateTodoError: false,

  deletingTodo: false,
  deleteTodoSuccess: false,
  deleteTodoError: false,
};

export default TodoStore;