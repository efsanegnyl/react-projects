import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import TodoApp from "./views/TodoApp/todo";
import Home from "./views/Home/home";

const App: FC = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
