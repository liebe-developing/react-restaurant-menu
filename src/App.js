import { Box, Heading, VStack } from "@chakra-ui/react";
import { MenuButtons, MenuList } from "./components/index";
import { useState } from "react";
// import api from "./api/menus";
import { menus } from "./fixtures/menus";

const allCategories = ["all", ...new Set(menus.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(menus);
  const [categories] = useState(allCategories);

  const filterMenus = (category) => {
    if (category === "all") {
      setMenuItems(menus);
      return;
    }
    const newMenus = menus.filter((menu) => menu.category === category);
    return setMenuItems(newMenus);
  };

  return (
    <VStack spacing={10} w="1200px" m="50px auto">
      <Heading display="grid" placeContent="center">
        Our Menu
        <Box
          width="5rem"
          height="0.25rem"
          bgColor="cyan"
          mx="auto"
          mt={2}
        ></Box>
      </Heading>
      <MenuButtons categories={categories} filterMenus={filterMenus} />
      <MenuList menus={menuItems} />
    </VStack>
  );
};

export default App;
