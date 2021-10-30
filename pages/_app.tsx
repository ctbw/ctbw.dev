// See docs to learn more about this file: https://nextjs.org/docs/advanced-features/custom-app
import React from 'react';

import '../styles/globals.css';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';

// used for collection views (optional)
import 'rc-dropdown/assets/index.css';

// used for rendering equations (optional)
import 'katex/dist/katex.min.css';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
