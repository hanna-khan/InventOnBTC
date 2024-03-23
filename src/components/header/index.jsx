import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  Image,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="black" p={0} margin={0}>
      <Container maxW={"1440px"}>
        <Flex
          color="white"
          // minH="60px"
          py={{ base: 2 }}
          // px={{ base: 4 }}
          align="center"
          justifyContent={"space-between"}
        >
          <Flex align="center">
            <Image boxSize="60px" src={Logo} alt="Logo" />
            <Box>
              <Text as="h1" color="white" fontSize="xl">
                InventOn
                <Box as="span" color="#fba418" display="block">
                  BTC
                </Box>
              </Text>
            </Box>
          </Flex>
          <DesktopNav />

          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            display={{ base: "flex", md: "none" }}
            color="#fff"
            bg="none"
            aria-label="Toggle Navigation"
          />

          <Stack
            flex={{ base: 1, md: 0 }}
            justify="flex-end"
            direction="row"
            spacing={6}
            align="center"
          >
            <Button
              as="a"
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="#fba418"
              href="#"
              _hover={{
                bg: "#e69517",
              }}
            >
              Connect Wallet
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack display={{ base: "none", md: "flex" }} direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as={Link}
            p={2}
            to={navItem.href}
            fontSize="sm"
            fontWeight={500}
            color="white" // Ensure text color is white
            _hover={{ textDecoration: "none" }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="white" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Link
      py={2}
      href={href}
      display="block"
      fontWeight={600}
      color="gray.600"
      _hover={{
        textDecoration: "none",
      }}
    >
      {label}
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: "Explore",
    href: "/categories",
  },
  {
    label: "Curated Project",
    href: "/categories",
  },
  {
    label: "Start a Project",
    href: "#",
  },
];
