import React, { FC, ChangeEvent, useState } from "react";
import { IconButton, Checkbox, Tag, Text, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import ".././index.scss";
export interface ITodoItem {
  id: number;
  text: string;
  status: boolean;
}
interface ITodoListProps {
  text: string;
  onDelete: () => void;
  checked: boolean;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties | any;
}

const TodoList: FC<ITodoListProps> = ({
  text,
  onDelete,
  checked,
  onChange,
  style,
}) => {
  const [checkStatus, setCheckStatus] = useState(checked);
  console.log("check status", checkStatus);
  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckStatus(e.target.checked);

    // animation finish
    setTimeout(() => {
      onChange(e.target.checked);
    }, 500);
  };

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
      <Checkbox
        width="80%"
        size="lg"
        colorScheme="teal"
        onChange={onChangeCheck}
        isChecked={checkStatus}
      >
        <Text className={style}>{text}</Text>
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
