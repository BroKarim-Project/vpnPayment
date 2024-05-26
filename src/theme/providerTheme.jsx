import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colors } from './token';

const theme = extendTheme({ colors });

export function ProviderTheme({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
