import React, { FC, useEffect, useState, useRef } from "react";
import Header from "../../components/partials/header";
import TodoAd from "./components/todoAd";
import TodoList from "./components/todoList";
import { Box } from "@chakra-ui/react";
import TodoService from "./services";
import autoAnimate from "@formkit/auto-animate";
import { toast } from "react-hot-toast";
import "./index.scss";

export interface ITodoItem {
  id: number;
  text: string;
  status: boolean;
}
const TodoApp: FC = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const [countText, setCountText] = useState("( 0 / 0 )");
  const parent = useRef(null);

  const getAllTodos = () => {
    const todos = TodoService.GetAllTodos();
    todos.sort((a: ITodoItem, b: ITodoItem) => {
      if (a.id < b.id) return 1;
      if (a.id > b.id) return -1;
      return 0;
    });
    setTodoItems(todos);
  };

  const countTextFunction = () => {
    const trueCount = todoItems.filter((item) => item.status).length;
    setCountText("( " + trueCount + " / " + todoItems.length + " )");
  };

  const addFunction = (text: string) => {
    const todo = TodoService.Add(text);
    if (todo.status) {
      toast.success(todo.message);
    } else {
      toast.error(todo.message);
    }

    getAllTodos();
  };

  const deleteFunction = (id: number) => {
    const todo = TodoService.Delete(id);
    if (todo.status) {
      toast.success(todo.message);
    } else {
      toast.error(todo.message);
    }

    getAllTodos();
  };
  console.log(todoItems);

  const checkFunction = (id: number, status: boolean) => {
    const todo = TodoService.UpdateStatus(id, status);
    if (todo.status) {
      toast.success(todo.message);
    } else {
      toast.error(todo.message);
    }

    getAllTodos();
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    countTextFunction();
  }, [todoItems]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <Box>
      <Header name="Todo App" />
      <Box maxW="500" mx="auto" mt="10">
        <TodoAd onAdd={addFunction} />
        <Box border="1px" borderColor="gray.200" rounded={"lg"} ref={parent}>
          {todoItems.map((item: ITodoItem, index: number) => (
            <TodoList
              key={item.id}
              onDelete={() => deleteFunction(item.id)}
              style={item.status ? "textUppercase" : ""}
              text={item.text}
              onChange={() => checkFunction(item.id, !item.status)}
              checked={item.status}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TodoApp;
