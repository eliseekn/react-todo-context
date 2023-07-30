import { useContext, useRef } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

export default function AddTodo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useContext(TodoContext);

  const handleAddTodo = (): void => {
    dispatch({
      type: "add",
      payload: {
        id: state.length + 1,
        description: inputRef.current!.value,
        completed: false,
      },
    });

    inputRef.current!.value = "";
  };

  return (
    <Row className="d-flex align-items-center">
      <Col lg={10}>
        <Form.Group controlId="todo">
          <Form.Control
            type="text"
            placeholder="Todo description"
            ref={inputRef}
          />
        </Form.Group>
      </Col>
      <Col lg={2}>
        <Button variant="primary" type="submit" onClick={handleAddTodo}>
          Add
        </Button>
      </Col>
    </Row>
  );
}
