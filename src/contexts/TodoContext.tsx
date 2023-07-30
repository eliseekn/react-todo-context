import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { TodoType, TodoAction } from "../interfaces/ index";
import TodoReducer from "../reducers/TodoReducer";

export const TodoContext = createContext<{
  state: TodoType[];
  dispatch: Dispatch<TodoAction>;
}>({
  state: [],
  dispatch: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function TodoProvider({ children }: Props) {
  const [state, dispatch] = useReducer<typeof TodoReducer>(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
