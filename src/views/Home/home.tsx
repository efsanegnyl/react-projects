import React, { FC } from "react";

import Card from "../../components/elements/card";
import Header from "../../components/partials/header";
import { Box } from "@chakra-ui/react";

interface IHomeProps {
  name?: string;
}

const Home: FC<IHomeProps> = ({ name }) => {
  return (
    <>
      <Header />
      <Box className=" flex  ">
        <Card linkUrl="/todo" text="TodoApp" imageUrl="/image/todoApp.png" />
        <Card
          linkUrl="/bionic-read"
          text="Bionic Read"
          imageUrl="/image/todoApp.png"
        />
      </Box>
    </>
  );
};
export default Home;
