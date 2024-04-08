import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  Progress,
  Stack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <Card maxW="sm" minH="550px" height="auto">
      <Box as={Link} to={`/project/${item.id}`} width="100%">
        <Image
          src={item.image}
          alt={item.title}
          width="100%"
          height="100%"
          minHeight="300px"
          objectFit="cover"
        />
      </Box>
      <CardBody overflowY="auto" maxH="500px">
        <Stack mt="2" spacing="3">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
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
                <Flex gap="5px" alignItems="Center">
                  <Icon as={FaCheckSquare} color="#0034EC" />
                  <Text color="#0034EC" fontWeight="semibold">
                    Curated
                  </Text>
                </Flex>
              ) : null}
              {item.treasuryFunded ? (
                <Flex gap="5px" alignItems="Center">
                  <Icon as={FaCheckSquare} color="yellow" />
                  <Text color="yellow" fontWeight="semibold">
                    Treasury Funded
                  </Text>
                </Flex>
              ) : null}
              {item.rewards ? (
                <Flex gap="5px" alignItems="Center">
                  <Icon as={FaCheckSquare} color="#000" />
                  <Text color="#000" fontWeight="semibold">
                    Runestone rewards
                  </Text>
                </Flex>
              ) : null}
            </Box>
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
          <Progress size="sm" value={20} rounded={"10px"} />
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
  );
};

export default ProjectCard;
