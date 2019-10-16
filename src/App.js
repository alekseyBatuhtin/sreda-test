import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { CSSReset, ThemeProvider } from '@chakra-ui/core';

import SearchRepositories from './components/SearchRepositories';
import client from './api';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CSSReset />
        <SearchRepositories />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
