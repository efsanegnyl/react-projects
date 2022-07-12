import React, { useState, FC } from "react";
import { Box, Textarea, Text, Center } from "@chakra-ui/react";
import Header from "../../components/partials/header";

const BionicRead: FC = () => {
  //
  let [value, setValue] = React.useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    const pattern = /([A-Za-z_ğüşlöçĞÜŞİÖÇ]+)/g;
    const result = inputValue.match(pattern);
    console.log(result);

    // eslint-disable-next-line array-callback-return
    result.map((item: string) => {
      console.log(item);
    });
    // @ts-ignore
    // const data = value.replaceAll(pattern, (word) => {
    //   let temp = word;
    //   temp = "<b>" + temp[0] + "</b>";
    //   return temp;
    //   console.log(temp);
    // });

    setValue(inputValue);
  };

  return (
    <>
      <Header name="Bionic Read " />
      <Center px={3} py={2}>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"
          width="30%"
          height="200px"
          style={{ border: "1px solid #ccc", borderRadius: "5px" }}
        />
      </Center>
      <Text mb="8px">Value: {value}</Text>
    </>
  );
};

export default BionicRead;
