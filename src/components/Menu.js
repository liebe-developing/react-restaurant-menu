import {
  Badge,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Menu = ({ menu }) => {
  const { title, img, price, desc } = menu;
  
  return (
    <Stack
      borderRadius="lg"
      height={{ sm: "476px", md: "150px" }}
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", "gray.900")}
    >
      <Flex flex={1} bg="blue.200" border="3px solid orange">
        <Image objectFit="cover" boxSize="100%" alt={title} src={img} />
      </Flex>
      <Stack flex={1} flexDirection="column" p={1} pt={2}>
        <Stack
          align={"center"}
          direction={"row"}
          borderBottom="1px solid #ccc"
          pb={1}
        >
          <Heading fontSize={"md"} letterSpacing="3px">
            {title}
          </Heading>
          <Spacer />
          <Badge colorScheme="cyan" variant="solid">
            ${price}
          </Badge>
        </Stack>
        <Text color="gray.500" noOfLines={4}>
          {desc}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Menu;
