/** @type { import('@storybook/react').Preview } */
import React from "react";
import Center from "../src/components/Center/Center";
import { ChakraProvider, Box } from "@chakra-ui/react";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
  decorators: [
    (story) => (
      <ChakraProvider>
        {/* <Center>{story()}</Center> */}
        <Box>{story()}</Box>
      </ChakraProvider>
    ),
  ],
};

export default preview;
