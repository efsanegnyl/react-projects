import React, { FC } from "react";
import { IconButton, Text, Box, Flex, Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoList: FC = () => {
  return (
    <Box border="1px" borderColor="gray.200" rounded={"lg"}>
      <Flex
        mx={4}
        fontSize="20px"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px"
        borderColor="gray.200"
        height={20}
      >
        <Checkbox size="lg" colorScheme="teal">
          <Text>Todo List</Text>
        </Checkbox>
        <IconButton
          colorScheme="gray"
          aria-label="Call Segun"
          size="md"
          icon={<DeleteIcon />}
        />
      </Flex>
      <Flex
        mx={4}
        fontSize="20px"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px"
        borderColor="gray.200"
        height={20}
      >
        <Checkbox size="lg" colorScheme="teal">
          <Text>Todo List</Text>
        </Checkbox>
        <IconButton
          colorScheme="gray"
          aria-label="Call Segun"
          size="md"
          icon={<DeleteIcon />}
        />
      </Flex>
      <Flex
        mx={4}
        fontSize="20px"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px"
        borderColor="gray.200"
        height={20}
      >
        <Checkbox size="lg" colorScheme="teal">
          <Text>Todo List</Text>
        </Checkbox>

        <IconButton
          colorScheme="gray"
          aria-label="Call Segun"
          size="md"
          icon={<DeleteIcon />}
        />
      </Flex>
    </Box>
  );
};

export default TodoList;
