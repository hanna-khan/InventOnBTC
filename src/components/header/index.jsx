import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Image,
  Container,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const NAV_ITEMS = [
  {
    label: "Explore",
    to: "/categories",
  },
  {
    label: "Curated Projects",
    to: "/categories",
  },
  {
    label: "Start a Project",
    to: "",
    href: "https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o",
  },
];

const DesktopNav = () => {
  return (
    <Stack display={{ base: "none", md: "flex" }} direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as={navItem.to ? Link : "a"}
            p={2}
            to={navItem.to}
            href={navItem.href}
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

export default function WithSubnavigation() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("./login");
  };

  return (
    <Box bg="black" p={0} margin={0}>
      <Container maxW="1240px">
        <Flex
          color="white"
          py={{ base: 2 }}
          align="center"
          justifyContent={"space-between"}
        >
          <Flex as={Link} to="/" align="center">
            <Image boxSize="60px" src={Logo} alt="Logo" />
            <Box>
              <Text as="h1" color="white" fontSize="md">
                InventOn
                <Box as="span" color="#fba418" display="block">
                  BTC
                </Box>
              </Text>
            </Box>
          </Flex>
          <DesktopNav />

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              display={{ base: "flex", md: "none" }}
              color="#fff"
              fontSize="22px"
              bg="none"
              border="none"
              _expanded={{ bgColor: "transparent" }}
            />
            <MenuList color="#000">
              {NAV_ITEMS.map((item) => (
                <MenuItem
                  as={item.to ? Link : "a"}
                  to={item.to}
                  href={item.href}
                >
                  <Text>{item.label}</Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify="flex-end"
            direction="row"
            spacing={3}
            align="center"
          >
            <Button
              as="a"
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="#E16A15"
              href="#"
              _hover={{
                bg: "#E16A15",
              }}
            >
              Connect Wallet
            </Button>
            <Icon
              as={IoIosLogOut}
              fontSize="30px"
              onClick={logout}
              cursor="pointer"
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
