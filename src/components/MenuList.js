import { SimpleGrid, Text } from "@chakra-ui/react";
import Menu from "./Menu";

const MenuList = ({ menus }) => {
  return (
    <>
      {menus.length ? (
        <SimpleGrid spacing={10} columns={2} w="full">
          {menus.map((menu) => (
            <Menu key={menu.id} menu={menu} />
          ))}
        </SimpleGrid>
      ) : (
        <Text fontSize="24px" fontWeight="bold" color="gray.600">
          No menus to display
        </Text>
      )}
    </>
  );
};

export default MenuList;
