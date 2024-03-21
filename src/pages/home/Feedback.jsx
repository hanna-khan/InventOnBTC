import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Grid,
  GridItem,
  Card,
  Avatar,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { data } from "../../utils/FeedbackData";

const Feedback = () => {
  return (
    <Container maxW={"90vw"} mt={20}>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        textAlign="left"
        mb={8}
        textTransform={"uppercase"}
      >
        What People Are Saying
      </Heading>
      <Text
        fontSize="0.7rem"
        textAlign="left"
        lineHeight="1.375"
        fontWeight="400"
        maxW={{ base: "100%", md: "470px" }}
        mb={10}
        color={useColorModeValue("#6d6d6e", "gray.400")}
      >
        Don't just take our word for it. Here's what our satisfied startup
        founders and backers have to say about their experience with our
        crowdfunding platform.
      </Text>
      <Flex justifyContent="center" alignItems={'center'} flexWrap="wrap">
        {data.map((item, index) => (
          <Box key={index} flexBasis="40%" mb={4}>
            <Card maxW="md" bg="#f8f8f8" rounded="md">
              <Flex p="4">
                <Avatar name="Segun Adebayo" src={item.image} />
                <Box ml="3">
                  <Heading size="sm">{item.title}</Heading>
                  <Text>{item.content}</Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Feedback;
