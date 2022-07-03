import { IResponse, ITodo } from "./types";

const getAllTodos = (): ITodo[] =>
  JSON.parse(localStorage.getItem("todos") || "[]");

const idCreate = (): number =>
  getAllTodos().length > 0 ? getAllTodos()[getAllTodos().length - 1].id + 1 : 1;

const Add = (text: string): IResponse => {
  try {
    if (!text || text.trim().length === 0) {
      throw new Error("Text is required");
    } else {
      const todos: ITodo[] = getAllTodos();
      const id: number = idCreate();

      const todoItem: ITodo = {
        id,
        text,
        status: false,
      };

      todos.push(todoItem);

      localStorage.setItem("todos", JSON.stringify(todos));

      return {
        status: true,
        message: "Todo added successfully",
        data: todoItem,
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      status: false,
      message: error.message,
      data: null,
    };
  }
};

const functions = {
  Add,
};

export default functions;
