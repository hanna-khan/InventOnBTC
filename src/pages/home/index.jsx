import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
} from "@chakra-ui/react";
import HeroImage from "../../assets/images/hero_img.png";
import Coin1 from "../../assets/images/coin_1.png";
import Coin2 from "../../assets/images/coin_2.png";

const Home = () => {
  return (
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      mt={{ base: 0, md: -1 }}
      gap={0}
    >
      <Stack
        direction="column"
        bg="#151517"
        color="white"
        p={6}
        pl={20}
        pt={40}
        w={{ base: "100%", md: "60%" }}
      >
        <Heading as="h1" size="xl" fontWeight="bold" textAlign="left" mb={2}>
          Crowdfunding for Bitcoin <br /> start-ups
        </Heading>
        <Text
          fontSize="1.2rem"
          textAlign="left"
          lineHeight="1.375"
          fontWeight="300"
          maxW={{ base: "100%", md: "470px" }}
          mb={4}
          color={useColorModeValue("#6d6d6e", "gray.400")}
        >
          Join the revolution and support groundbreaking Bitcoin based projects
        </Text>
        <HStack spacing={3}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="md"
            rounded="md"
            boxShadow="md"
            color="black"
            bg="white"
          >
            For Backers
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            size="md"
            rounded="md"
            boxShadow="md"
            color="black"
            bg="white"
          >
            For Starters
          </Button>
        </HStack>
        <Text
          fontSize="1rem"
          textAlign="left"
          lineHeight="1.375"
          fontWeight="300"
          maxW={{ base: "100%", md: "470px" }}
          mb={4}
          color={useColorModeValue("#fff", "gray.400")}
        >
          Find
        </Text>
        <HStack spacing={5} mt={4}>
          <Image sx={{ width: "3vw" }} src={Coin1} alt="Coin1" />
          <Image sx={{ width: "3vw" }} src={Coin2} alt="Coin2" />
        </HStack>
      </Stack>
      <Box w={{ base: "100%", md: "40vw" }}>
        <Image
          w="100%"
          h="100%"
          minW={{ base: "auto", md: "30rem" }}
          objectFit="cover"
          src={HeroImage}
          fallback={<Skeleton />}
        />
      </Box>
    </Stack>
  );
};

export default Home;
