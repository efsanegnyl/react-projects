import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import "../../assets/index.scss";
import { Heading, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

interface IHeaderProps {
  name?: string;
}

const Header: FC<IHeaderProps> = ({ name = "React Projects" }) => {
  return (
    <nav>
      <Flex align="center" justify="space-between" p={10}>
        <Link to="/">
          <Text textColor="white">Home</Text>
        </Link>
        <Heading className="" textColor="white">
          {name}
        </Heading>

        <Flex align="center ">
          <a
            href="https://github.com/efsanegnyl"
            target="_blank"
            className="pr-10"
          >
            <FaGithub color="white" fontSize="24" />
          </a>
          <Avatar
            name="Efsane Günyol"
            src="https://www.efsanegunyol.com/assets/images/my.jpeg"
          />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Header;
