import React, { FC, ChangeEvent, useState } from "react";
import { Input, IconButton, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { toast } from "react-hot-toast";

interface ITodoAdProps {
  onAdd: (todo: string) => void;
}

const TodoAd: FC<ITodoAdProps> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (text.length > 0) {
      onAdd(text);
      setText("");
    } else {
      toast.error("Todo cannot be empty");
    }
  };
  return (
    <Flex mb={5} justify="center" alignItems="center">
      <Input
        width={300}
        placeholder="Todo Item Ad"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />

      <IconButton
        colorScheme="teal"
        aria-label="Send email"
        icon={<AddIcon />}
        onClick={handleAdd}
      />
    </Flex>
  );
};

export default TodoAd;
