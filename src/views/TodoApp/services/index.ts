import { IResponse, ITodo } from "./types";

// const turkishToLower = (text: string): string => {
//   var string = text;
//   var letters = { İ: "i", I: "ı", Ş: "ş", Ğ: "ğ", Ü: "ü", Ö: "ö", Ç: "ç" };
//   string = string.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
//     // @ts-ignore
//     return letters[letter];
//   });
//   return string.toLowerCase();
// };

const GetAllTodos = (): ITodo[] =>
  JSON.parse(localStorage.getItem("todos") || "[]");

const idCreate = (): number =>
  GetAllTodos().length > 0 ? GetAllTodos()[GetAllTodos().length - 1].id + 1 : 1;

const Add = (text: string): IResponse => {
  try {
    if (!text || text.trim().length === 0) {
      throw new Error("Text is required");
    } else {
      const todos: ITodo[] = GetAllTodos();

      if (
        todos.find(
          (todo: ITodo) =>
            todo.text.toLocaleLowerCase() === text.toLocaleLowerCase()
        )
      ) {
        throw new Error("Todo already exists");
      }
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

const Delete = (id: number): IResponse => {
  try {
    const todos: ITodo[] = GetAllTodos();

    const todoIndex: number = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      throw new Error("Todo not found");
    } else {
      todos.splice(todoIndex, 1);

      localStorage.setItem("todos", JSON.stringify(todos));

      return {
        status: true,
        message: "Todo deleted successfully",
        data: null,
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

const UpdateStatus = (id: number, status: boolean): IResponse => {
  try {
    const todos: ITodo[] = GetAllTodos();

    const todoIndex: number = todos.findIndex((todo: ITodo) => todo.id === id);

    if (todoIndex === -1) {
      throw new Error("Todo not found");
    } else {
      todos[todoIndex].status = status;

      localStorage.setItem("todos", JSON.stringify(todos));

      return {
        status: true,
        message: "Todo status updated successfully",
        data: null,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null,
    };
  }
};

const functions = {
  Add,
  GetAllTodos,
  Delete,
  UpdateStatus,
};

export default functions;
