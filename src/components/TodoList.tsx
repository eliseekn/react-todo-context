import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useContext(TodoContext);

  return (
    <ListGroup>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
}
