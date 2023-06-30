import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const MenuButtons = ({ categories, filterMenus }) => {
  return (
    <Flex alignItems="center" my={10}>
      {categories.map((category, index) => (
        <Button
          key={index}
          colorScheme="yellow"
          size="sm"
          mr={2}
          onClick={() => filterMenus(category)}
        >
          {category.toUpperCase()}
        </Button>
      ))}
    </Flex>
  );
};

export default MenuButtons;
