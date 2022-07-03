import React, { FC } from "react";
import Header from "../../components/partials/header";
import TodoAd from "./components/todoAd";
import TodoList from "./components/todoList";
import { Box } from "@chakra-ui/react";

const TodoApp: FC = () => {
  return (
    <Box>
      <Header name="Todo App" />
      <Box maxW="500" mx="auto" mt="10">
        <TodoAd />
        <TodoList />
      </Box>
    </Box>
  );
};

export default TodoApp;
