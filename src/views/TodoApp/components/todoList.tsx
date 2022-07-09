import React, { FC, useState } from "react";
import { IconButton, Checkbox, Tag, Text, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
export interface ITodoItem {
  id: number;
  text: string;
  status: boolean;
}
interface ITodoListProps {
  text: string;
  onDelete: () => void;
}

const TodoList: FC<ITodoListProps> = ({ text, onDelete }) => {
  return (
    <Flex
      mx={4}
      fontSize="20px"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="gray.200"
      height={20}
    >
      <Checkbox width="80%" size="lg" colorScheme="teal">
        <Text>{text}</Text>
      </Checkbox>

      <IconButton
        colorScheme="gray"
        aria-label="Call Segun"
        size="md"
        icon={<DeleteIcon />}
        onClick={onDelete}
      />
    </Flex>
  );
};

export default TodoList;
