import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    gloval: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});

export default theme;
