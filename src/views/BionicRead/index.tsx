import React, { useState, FC } from "react";
import { Box, Textarea, Center, Button, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/partials/header";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const BionicRead: FC = () => {
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    const pattern = /([A-Za-z_ğüşlöçĞÜŞİÖÇ]+)/g;
    const result = inputValue.match(pattern);
    console.log(result);
    if (inputValue.length > 0) {
      result.map((item: string) => {
        console.log("item", item);
      });
    }
    // eslint-disable-next-line array-callback-return
    // const data = value.replaceAll(pattern, (word) => {
    //   let temp = word;
    //   temp = "<b>" + temp[0] + "</b>";
    //   return temp;
    //   console.log(temp);
    // });
    // @ts-ignore

    setValue(inputValue);
  };
  const onClick = () => {
    onOpen();
  };

  return (
    <Box height="100vh" backgroundColor="gray.200">
      <Header name="Bionic Read " />

      <Center height="80%">
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"
          width="50%"
          height="80%"
          fontSize={16}
        />
        <Box width={1} height="80%" backgroundColor="white" marginLeft={4} />
      </Center>
      <Center marginTop={-16}>
        <Button
          disabled={value.length === 0 ? true : false}
          onClick={onClick}
          rightIcon={<ArrowForwardIcon />}
          width={200}
          colorScheme="blue"
        >
          Process
        </Button>
      </Center>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="full"
      >
        <ModalContent px={40}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{value}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BionicRead;
