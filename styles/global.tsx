import React from 'react';
import theme from './theme';

export default () => (
  <style>
    {`
        body {
            color: #444;
            margin: 0;
            font-size: 14px;
            background-color: ${theme.colors.offWhite};
            font-family: ${theme.fonts.sans}
        }
        * {
            box-sizing: border-box;
        }
    `}
  </style>
);
