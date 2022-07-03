import React, { FC } from "react";

import { Link } from "react-router-dom";
import {
  Box,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";

interface ICardProps {
  text: string;
  imageUrl: string;
  linkUrl: string;
}

const Card: FC<ICardProps> = ({ text, imageUrl, linkUrl }) => {
  return (
    <>
      <Link to={linkUrl} className="mx-10">
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          py={20}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${imageUrl})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={imageUrl}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {text}
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>
      </Link>
    </>
  );
};
export default Card;
