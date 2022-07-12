import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import TodoApp from "./views/TodoApp/todo";
import Home from "./views/Home/home";
import BionicRead from "./views/BionicRead";

const App: FC = () => {
  return (
    <ChakraProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/bionic-read" element={<BionicRead />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
