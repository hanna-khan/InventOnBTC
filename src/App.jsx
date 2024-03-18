import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./layout";

const App = () => {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
};

export default App;
