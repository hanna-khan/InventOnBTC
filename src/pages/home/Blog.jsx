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
} from "@chakra-ui/react";
import { data } from "../../utils/BlogData";
const Blog = () => {
  return (
    <>
      <Container maxW="90vw">
        <Box mt="8rem">
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            textAlign="left"
            mb={2}
            textTransform={"uppercase"}
          >
            Blog
          </Heading>
          <Heading
            as="h3"
            size="sm"
            fontWeight="500"
            textAlign="left"
            mb={8}
            textTransform={"uppercase"}
          >
            Keep up-to date on the Bitcoin Economy
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            {data.map((item, index) => (
              <GridItem key={index}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    objectFit="cover"
                    maxH="350px"
                    width="100%"
                  />
                    <Stack mt="2" spacing="3">
                      <Flex justifyContent={"space-between"}>
                        <Text
                          fontSize="0.8rem"
                          margin={'auto'}
                          display={'block'}
                          lineHeight="1.375"
                          fontWeight="600"
                          maxW={{ base: "100%", md: "470px" }}
                          color={useColorModeValue("#000", "gray.400")}
                        >
                          {item.title}
                        </Text>
                      </Flex>
                      <Box maxW={"20vw"}>
                        <Text
                          fontSize="0.8rem"
                          textAlign="left"
                          lineHeight="1.375"
                          fontWeight="600"
                          maxW={{ base: "100%", md: "470px" }}
                          color={useColorModeValue("#000", "gray.400")}
                        >
                          {item.subTitle}
                        </Text>
                        <Text
                          fontSize="0.7rem"
                          textAlign="left"
                          lineHeight="1.375"
                          fontWeight="400"
                          maxW={{ base: "100%", md: "470px" }}
                          mb={4}
                          color={useColorModeValue("#6d6d6e", "gray.400")}
                        >
                          {item.content}
                        </Text>
                        <Text
                          fontSize="0.7rem"
                          textAlign="left"
                          lineHeight="1.375"
                          fontWeight="600"
                          textTransform={"uppercase"}
                          maxW={{ base: "100%", md: "470px" }}
                          color={useColorModeValue("#000", "gray.400")}
                        >
                         Learn More {'>'}
                        </Text>
                      </Box>
                    </Stack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
