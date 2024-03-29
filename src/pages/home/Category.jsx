"use client";

import { Box, Heading, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { data } from "../../utils/CategoryData";
export default function Category() {
  return (
    <>
      <Stack
        bg={"#e6e7e9"}
        as={Box}
        textAlign={"center"}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 20, md: 36 }}
        mt={20}
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}
        >
          WHAT CATEGORIES ARE YOU INTERESTED IN?
        </Heading>
        <Text color={"#000"}>
          DISCOVER PROJECTS THAT ALIGN WITH YOUR INTERESTS
        </Text>
        <Text color={"#000"}>EXPLORE THE TOP CATEGORIES</Text>
        <Stack direction="column" spacing={3} align="center" alignSelf="center">
          <Flex
            flexDirection={{ base: "row" }}
            flexWrap="wrap"
            justify="center"
            gap="60px"
          >
            {data.map((item, index) => (
              <Box key={index} textAlign="center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={{ base: "45px", md: "auto" }}
                  height={{ base: "auto", md: "50px" }}
                  objectFit="cover"
                />
                <Text
                  fontSize={{ base: "10px", md: "20px" }}
                  textTransform="capitalize"
                  textAlign="center"
                >
                  {item.title}
                </Text>
              </Box>
            ))}
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}
