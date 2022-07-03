import React, { FC } from "react";
import { Input, IconButton, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const TodoAd: FC = () => {
  return (
    <Flex mb={5} justify="center" alignItems="center">
      <Input width={300} placeholder="Todo Item Ad" />
      <IconButton
        colorScheme="teal"
        aria-label="Send email"
        icon={<AddIcon />}
      />
    </Flex>
  );
};

export default TodoAd;
