/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Heading,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Divider,
  Box,
  Container,
  useColorModeValue,
  Progress,
  Flex,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { data } from "../../utils/TrendingProjectsData";
import { FaCheckSquare } from "react-icons/fa";
import { QuestionIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
const TrendingProjects = () => {
  return (
    <>
      <Container maxW="1440px">
        <Box mt="8rem">
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            textAlign="left"
            mb={8}
            textTransform={"uppercase"}
          >
            Trending Projects
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            gap={6}
            justifyContent="center"
          >
            {data.map((item, index) => (
              <Card
                key={index}
                maxW="sm"
                minH="550px"
                height="auto"
                margin={"auto"}
              >
                <Image src={item.image} alt={item.title} />
                <CardBody overflowY="auto" minH="300px">
                  <Stack mt="2" spacing="3">
                    <Flex
                      justifyContent={"space-between"}
                      alignItems="center"
                      gap={2}
                    >
                      <Flex gap={2} alignItems="center">
                        <Text
                          fontSize="0.7rem"
                          textAlign="left"
                          lineHeight="1.375"
                          fontWeight="500"
                          textTransform={"uppercase"}
                          maxW={{ base: "100%", md: "470px" }}
                          color={useColorModeValue("#000", "gray.400")}
                        >
                          {item.title}
                        </Text>
                        <Box>
                          {item.curated ? (
                            <Flex alignItems="center">
                              <Icon
                                as={FaCheckSquare}
                                color="#0034EC"
                                marginRight="3px"
                              />
                              <Text color="#0034EC">Curated</Text>
                              <Icon
                                as={QuestionIcon}
                                opacity={0.5}
                                marginLeft="10px"
                                color="#0034EC"
                              />
                            </Flex>
                          ) : null}
                          {item.treasuryFunded ? (
                            <Flex alignItems="center">
                              <Icon
                                as={FaCheckSquare}
                                color="#E16A15"
                                marginRight="3px"
                              />
                              <Text color="#E16A15">Treasury Funded</Text>
                              <Icon
                                as={QuestionIcon}
                                opacity={0.5}
                                marginLeft="10px"
                                color="#E16A15"
                              />
                            </Flex>
                          ) : null}
                        </Box>
                      </Flex>

                      <CiHeart size={20} color="gray" />
                    </Flex>

                    <Text
                      fontSize="0.8rem"
                      textAlign="left"
                      lineHeight="1.375"
                      fontWeight="600"
                      textTransform={"uppercase"}
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
                      fontSize="0.8rem"
                      textAlign="left"
                      lineHeight="1.375"
                      fontWeight="400"
                      maxW={{ base: "100%", md: "470px" }}
                      mb={4}
                      textTransform={"uppercase"}
                      color={useColorModeValue("#6d6d6e", "gray.400")}
                    >
                      {item.subContent}
                    </Text>
                    <Flex gap={"2"}>
                      <Text
                        fontSize="0.8rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="500"
                        maxW={{ base: "100%", md: "470px" }}
                        textTransform={"uppercase"}
                        color={useColorModeValue("#000", "gray.400")}
                      >
                        {item.barRate}
                      </Text>

                      <Text
                        fontSize="0.8rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="400"
                        maxW={{ base: "100%", md: "470px" }}
                        textTransform={"uppercase"}
                        mr={20}
                        color={useColorModeValue("#6d6d6e", "gray.400")}
                      >
                        {item.barTitle}
                      </Text>
                      <Text
                        fontSize="0.8rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="400"
                        maxW={{ base: "100%", md: "470px" }}
                        textTransform={"uppercase"}
                        color={useColorModeValue("#6d6d6e", "gray.400")}
                      >
                        {item.barPercent}
                      </Text>
                    </Flex>
                    <Progress
                      colorScheme="gray"
                      size="sm"
                      value={20}
                      rounded={"10px"}
                    />
                    <Text
                      fontSize="0.7rem"
                      textAlign="left"
                      lineHeight="1.375"
                      fontWeight="500"
                      maxW={{ base: "100%", md: "470px" }}
                      color={useColorModeValue("#6d6d6e", "gray.400")}
                    >
                      {item.time}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default TrendingProjects;
