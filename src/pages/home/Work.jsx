/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Heading,
  Grid,
  GridItem,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Divider,
  Box,
  Container,
  useColorModeValue,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { data } from "../../utils/WorkData";
const Work = () => {
  return (
    <>
      <Container maxW="1440px">
        <Box mt="8rem">
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            textAlign="left"
            mb={2}
            color="#e16a15"
          >
            How it works?
          </Heading>
          <Heading
            as="h3"
            size="md"
            fontWeight="400"
            textAlign="left"
            mb={8}
            color="#808080"
          >
            Welcome to InventOnBTC, where you can support and fund projects
            created on Bitcoin. Here's how it works:
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 3, xl: 4 }}
            gap={6}
            justifyContent="center"
          >
            {data.map((item, index) => (
              <Card
                key={index}
                maxW="sm"
                minH="250px"
                height="auto"
                bg={"#f8f8f8"}
                p={6}
              >
                <Box ml="3">
                  <Heading size="md" fontWeight={"extrabold"} mb={4}>
                    {item.title}
                  </Heading>
                  <Text color={"#7c7c7c"} fontSize={"1.2rem"}>
                    {item.content}
                  </Text>
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Work;
