import React from 'react'
import {
    Heading,
    Grid,
    GridItem,
    Text,
    Image,
    Card,
    CardBody,
    Stack,
    CardFooter,
    Divider,
    Box,
    Container,
    useColorModeValue,
    Progress,
    Flex
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { data } from '../../utils/trendingProjectsData';
const TrendingProjects = () => {
    return (
        <>
            <Container
                maxW='90vw'
            >
                <Box mt="8rem">
                    <Heading as="h3" size="xl" fontWeight="bold" textAlign="left" mb={8} transform={"uppercase"}>
                        Trending Projects
                    </Heading>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                        {data.map((item, index) => (
                            <GridItem key={index}>
                                <Card maxW="sm" minH="550px" height="auto">
                                    <Image src={item.image} alt={item.title} />
                                    <CardBody overflowY="auto" maxH="500px">
                                        <Stack mt="2" spacing="3">
                                            <Flex justifyContent={'space-between'}>
                                                <Text
                                                    fontSize="0.7rem"
                                                    textAlign="left"
                                                    lineHeight="1.375"
                                                    fontWeight="500"
                                                    textTransform={'uppercase'}
                                                    maxW={{ base: "100%", md: "470px" }}
                                                    color={useColorModeValue("#000", "gray.400")}
                                                >
                                                    {item.title}
                                                </Text>
                                                <CiHeart size={20} color='gray' />
                                            </Flex>
                                            <Text
                                                fontSize="0.8rem"
                                                textAlign="left"
                                                lineHeight="1.375"
                                                fontWeight="600"
                                                textTransform={'uppercase'}
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
                                                textTransform={'uppercase'}
                                                color={useColorModeValue("#6d6d6e", "gray.400")}
                                            >
                                                {item.subContent}
                                            </Text>
                                            <Flex gap={'2'}>
                                                <Text
                                                    fontSize="0.8rem"
                                                    textAlign="left"
                                                    lineHeight="1.375"
                                                    fontWeight="500"
                                                    maxW={{ base: "100%", md: "470px" }}
                                                    textTransform={'uppercase'}
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
                                                    textTransform={'uppercase'}
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
                                                    textTransform={'uppercase'}
                                                    color={useColorModeValue("#6d6d6e", "gray.400")}
                                                >
                                                    {item.barPercent}
                                                </Text>
                                            </Flex>
                                            <Progress colorScheme='gray' size='sm' value={20} rounded={'10px'} />
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
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default TrendingProjects