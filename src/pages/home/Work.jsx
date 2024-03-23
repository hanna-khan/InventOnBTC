/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";

import {
  Heading,
  Text,
  Card,
  Box,
  Container,
  SimpleGrid,
  Stepper,
  Step,
  StepSeparator,
  StepDescription,
  StepTitle,
  StepIcon,
  StepNumber,
  StepStatus,
  StepIndicator,
} from "@chakra-ui/react";
import { data } from "../../utils/WorkData";
import { useSteps } from "chakra-ui-steps";
const steps = [
  { title: "First" },
  { title: "Second" },
  { title: "Third" },
  { title: "Forth" },
];

const Work = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

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
          {isLargerThanLG && (
            <Stepper
              size="lg"
              index={activeStep}
              orientation={"horizontal"}
              gap={0}
            >
              {steps.map((step, index) => (
                <Step key={index} gap="0">
                  <StepIndicator
                    sx={{
                      bg: "#e16a15",
                      border: "#e16a15",
                      color: "#fff",
                      width: "3rem",
                      height: "3rem",
                    }}
                  >
                    <StepStatus
                      sx={{
                        gap: 0,
                      }}
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <StepSeparator
                    size="md"
                    sx={{
                      bg: "#e16a15",
                      width: "1px",
                    }}
                  />
                </Step>
              ))}
            </Stepper>
          )}

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
                margin={"auto"}
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
