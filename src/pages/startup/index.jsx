import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import banner2 from "../../assets/images/banner2.jpeg";
import Coin1 from "../../assets/images/coin_1.png";
import Coin2 from "../../assets/images/coin_2.png";
import RocketIcon from "../../assets/images/rocket.png";
import Planet from "../../assets/images/planet.png";
import { data } from "../../utils/CuratedProjectData";
import { data as blogs } from "../../utils/BlogData";
import { data as categories } from "../../utils/CategoryData";
import { CiHeart } from "react-icons/ci";

const Satrtup = () => {
  return (
    <Box>
      <Flex
        backgroundImage={banner2}
        width="100%"
        height="400px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="#fff"
          fontSize={{ base: "20px", md: "50px" }}
          fontWeight={900}
          textAlign="center"
          px="5px"
        >
          Bring Your Bitcoin Innovations To Life
        </Text>
      </Flex>
      <Container maxW="1440px" my={10}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Text
            sx={{
              fontSize: { base: "40px", md: "64px" },
              color: "#191919",
              fontWeight: "bold",
            }}
          >
            Become A Bitcoin Entrepreneur
          </Text>
          <Button
            width="320px"
            height="89px"
            bgColor="#E16A15"
            color="#fff"
            fontSize="20px"
            _hover={{
              bgColor: "#E16A15",
            }}
          >
            Start A Project
          </Button>
        </Flex>
        <Box marginTop="30px">
          <Text
            fontSize="1rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="bold"
            maxW={{ base: "100%", md: "470px" }}
            mb={"4px"}
            mt="10px"
            color={"black"}
          >
            Get Funded with
          </Text>
          <Stack direction="row" spacing={5} mt={"4px"}>
            <Image sx={{ width: "50px" }} src={Coin1} alt="Coin1" />
            <Image sx={{ width: "50px" }} src={Coin2} alt="Coin2" />
          </Stack>
        </Box>
        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          marginTop="100px"
          flexWrap="wrap"
        >
          <Box maxWidth="390px" width="100%">
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Image src={RocketIcon} sx={{ width: "70px" }} />
              <Text
                sx={{
                  textAlign: "center",
                  color: "#2A2A2A",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Fund Your Ideas
              </Text>
            </Flex>
            <Text
              sx={{
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Entrepreneurship through crowdfunding
            </Text>
            <Text>
              Get access to crowdfunding for your innovate ideas in the Bitcoin
              economy. Extend your reach to the crypto ecosystem.
            </Text>
          </Box>
          <Box maxWidth="390px" width="100%">
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Image src={Planet} sx={{ width: "70px" }} />
              <Text
                sx={{
                  textAlign: "center",
                  color: "#2A2A2A",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                PLATFORM
              </Text>
            </Flex>
            <Text
              sx={{
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Platform for all in the Bitcoin Enonomy
            </Text>
            <Text>
              This is a platform for all. From artists to technologists and
              everything in between in the Bitcoin ecosystem. Anyone is welcome
              to create and innovate
            </Text>
          </Box>
        </Flex>
      </Container>
      <Stack
        bg={"#e6e7e9"}
        as={Box}
        textAlign={"center"}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 20, md: 36 }}
        mt={20}
      >
        <Heading fontWeight="bold" fontSize="36px">
          GET CURATED
        </Heading>
        <Text
          color={"#000"}
          w={{ base: "100%", md: "733px" }}
          textAlign={"center"}
          margin="0 auto"
        >
          Curated Projects on the Invent On BTC Platform are marked with the
          blue tick. This is a badge that makes the project stand-out from the
          rest and is only given to those who have satisfied the requirements
          set by the Invent On BTC platform
        </Text>
        <Text fontWeight="bold" fontSize="36px">
          Advantages to get curated
        </Text>
        <Stack direction="column" spacing={3} align="center" alignSelf="center">
          <Flex flexDir={{ base: "row" }} justify="center">
            {categories.map((item, index) => (
              <Box
                key={index}
                textAlign="center"
                mr={{ base: "18px", md: "50px" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={{ base: "30px", md: "50px" }}
                  height={{ base: "30px", md: "50px" }}
                  mixBlendMode={"multiply"}
                />
                <Text fontSize={{ base: "10px", md: "14px" }}>
                  {item.title}
                </Text>
              </Box>
            ))}
          </Flex>
        </Stack>
      </Stack>
      <Container maxW="1440px">
        <Text
          sx={{
            color: "black",
            fontSize: "32px",
            fontWeight: "bold",
            marginTop: "100px",
            marginBottom: "20px",
          }}
        >
          PROJECTS FUNDED THROUGH{" "}
          <Text as="span" sx={{ color: "#E16A15" }}>
            INVENT ON BTC
          </Text>
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3, xl: 3 }}
          gap={6}
          justifyContent="center"
        >
          {data.map((item, index) => (
            <Card key={index} maxW="sm" minH="550px" height="auto">
              <Image src={item.image} alt={item.title} />
              <CardBody overflowY="auto" maxH="500px">
                <Stack mt="2" spacing="3">
                  <Flex justifyContent={"space-between"}>
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
            </Card>
          ))}
        </SimpleGrid>
        <Text
          sx={{
            color: "black",
            fontSize: "32px",
            fontWeight: "bold",
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          CREATOR RESOURCES
        </Text>
        <Text
          sx={{
            color: "black",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Some tools and resources to help you on you Bitcoin Entrepreneurial
          journey
        </Text>
        <Flex alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
            gap={6}
            justifyContent="center"
            marginTop="30px"
          >
            {blogs.map((item, index) => (
              <Box key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  maxH="350px"
                  width="100%"
                  maxW="393px"
                />
                <Stack mt="2" spacing="3">
                  <Text
                    fontSize="0.8rem"
                    textAlign={"center"}
                    display={"block"}
                    lineHeight="1.375"
                    fontWeight="600"
                    maxW={{ base: "100%", md: "393px" }}
                    color={useColorModeValue("#000", "gray.400")}
                  >
                    {item.title}
                  </Text>
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
                      Learn More {">"}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Satrtup;
