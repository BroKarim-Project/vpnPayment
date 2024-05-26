import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ProviderTheme } from './theme/providerTheme.jsx';

const theme = extendTheme({
  colors: {
    button: {
      100: '#f2f4f9',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderTheme>
      <App />
    </ProviderTheme>
  </React.StrictMode>
);
