

import React from 'react';

import { GlobalStyle } from '../globalStyles';
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { lightTheme, darkTheme } from '../globalStyles';
import { ThemeProvider } from 'styled-components';

// TODO, make it use multiple themes
const themes = [lightTheme, darkTheme];

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme = {lightTheme}>
      <Story />
      </ThemeProvider>
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
}



