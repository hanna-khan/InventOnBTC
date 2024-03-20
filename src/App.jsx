import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./layout";
import "./index.css";

const App = () => {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
};

export default App;
