import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import {UrQlProvider} from './graphql/urql';
import createTimelessTheme from './assets/createTimelessTheme';
import {Box} from './src/components';

export const App = (): React.JSX.Element => {
  const theme = createTimelessTheme();

  return (
    <UrQlProvider>
      <ThemeProvider theme={theme}>
        <Box />
      </ThemeProvider>
    </UrQlProvider>
  );
};

export default App;
