import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import {UrQlProvider} from './graphql/urql';
import createTimelessTheme from './assets/createTimelessTheme';
import {AppNavigation} from './src/naviagtion';

export const App = (): React.JSX.Element => {
  const theme = createTimelessTheme();

  return (
    <UrQlProvider>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </UrQlProvider>
  );
};

export default App;
