export type TodoType = {
  id: number;
  description?: string;
  completed?: boolean;
};

export type TodoAction = {
  type: "add" | "delete" | "update" | "edit";
  payload: TodoType;
};
