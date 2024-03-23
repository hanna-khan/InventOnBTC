import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Link,
  Text,
  Image,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import FooterLogo from "../../assets/images/Footer_logo.png";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#FFF0E5"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Image sx={{ width: "5vw" }} src={FooterLogo} alt="Coin1" />
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="gray.600"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              EXPLORE
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="What we do" />
              <LinkItem text="Funding" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="gray.600"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              ABOUT
            </Heading>
            <List lineHeight="2">
              <LinkItem text="About us &amp; Safety" />
              <LinkItem text="Blog" />
              <LinkItem text="Trust & Safety" />
              <LinkItem text="Help & Support" />
              <LinkItem text="Press" />
              <LinkItem text="Careers" />
              <LinkItem text="Contact" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="gray.600"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Entrepreneurs
            </Heading>
            <List lineHeight="2">
              <LinkItem text="How it works" />
              <LinkItem text="Creator Corner" />
              <LinkItem text="Fees" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            gap={2}
          >
            <BsEnvelope size={30} />
            <Heading
              as="h5"
              color="#000"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
              textAlign={"center"}
            >
              Get it first
            </Heading>
            <Text textAlign={"center"}>
              Discover new innovations in the <br /> InventOnBTC newsletter
            </Text>
            <Input
              placeholder="Your Email address"
              size="sm"
              height="40px"
              width="200px"
              bg={"white"}
            />
            <Checkbox>
              <p style={{ fontSize: "12px" }}>
                I agree to the{" "}
                <span style={{ color: "#fba418" }}>Terms of Use </span> and have{" "}
                <br /> read and understand the{" "}
                <span style={{ color: "#fba418" }}>Privacy Policy</span>
              </p>
            </Checkbox>
            <Button
              marginTop={4}
              size="md"
              height="35px"
              width="200px"
              borderColor="#fba418"
              bg="#fba418"
              color={"#fff"}
              rounded={0}
              textTransform={"uppercase"}
              fontSize={"12px"}
            >
              Sign Me Up
            </Button>
          </Box>
        </Flex>
      </Box>
      <Flex maxW="64rem" mx="auto" alignItems="center" px={10} flexDir={'row'} justifyContent={'center'}>
        <List lineHeight="2" display={'flex'} gap={4} flexDir={'row'} >
          <LinkItem color={'#000'} fontSize={'10px'} text="Terms of Use" />
          <LinkItem color={'#000'} fontSize={'10px'} text="Privacy Policy" />
          <LinkItem color={'#000'} fontSize={'10px'} text="Cookie Policy" />
          <LinkItem color={'#000'} fontSize={'10px'} text="Do Not Sell My Personal Information" />
          <LinkItem color={'#000'} fontSize={'10px'} text="Accessibility" />
          <LinkItem color={'#000'} fontSize={'10px'} text="© 2024 InventOnBTC, Inc. All Rights Reserved" />
        </List>
      </Flex>
    </Box>
  );
};

const LinkItem = ({ text }) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        href="#"
        color="rgba(113, 128, 150, 1)"
        _hover={{ color: "green.600" }}
      >
        {text}
      </Link>
    </ListItem>
  );
};

export default Footer;
