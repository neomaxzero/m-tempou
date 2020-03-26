import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import theme from './theme';
import Counter from './Counter';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Counter />
    </ThemeProvider>
  );
}

export default App;
