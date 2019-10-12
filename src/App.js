import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import SearchRepositories from './components/SearchRepositories';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <SearchRepositories />
    </ThemeProvider>
  );
}

export default App;
