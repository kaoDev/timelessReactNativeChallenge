import React, { PureComponent } from 'react';
import { RootNavigation } from './src/navigation';
import { UrQlProvider } from './graphql/urql';
import { ThemeProvider } from '@shopify/restyle';
import createTimelessTheme from './assets/createTimelessTheme';

interface AppProps { }
interface IAppState { }
class App extends PureComponent<AppProps, IAppState> {
  render() {
    return (
      <ThemeProvider theme={createTimelessTheme()}>
        <UrQlProvider>
          <RootNavigation />
        </UrQlProvider>
      </ThemeProvider>
    );
  }
}
export default App;
