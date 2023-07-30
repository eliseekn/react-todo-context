import { TodoType, TodoAction } from "../interfaces/ index";

export default function TodoReducer(
  state: TodoType[],
  action: TodoAction,
): TodoType[] {
  switch (action.type) {
    case "add":
      return [action.payload, ...state];
    case "delete":
      return state.filter((todo: TodoType) => todo.id !== action.payload.id);
    case "update":
      state = state.map((todo: TodoType) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      state.sort(
        (x: TodoType, y: TodoType) =>
          Number(x.completed!) - Number(y.completed!),
      );

      return state;
    case "edit":
      return state.map((todo: TodoType) => {
        if (todo.id === action.payload.id) {
          return { ...todo, description: todo.description };
        }
        return todo;
      });
  }
}
