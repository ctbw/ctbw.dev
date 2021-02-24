import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

export default function App({ Component, pageProps }: any) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
