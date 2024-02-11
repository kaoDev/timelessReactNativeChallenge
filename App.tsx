import React, { PureComponent } from 'react';
import { RootNavigation } from './src/navigation';
import { UrQlProvider } from './graphql/urql';

interface AppProps { }
interface IAppState { }
class App extends PureComponent<AppProps, IAppState> {
  render() {
    return (
      <UrQlProvider>
        <RootNavigation />
      </UrQlProvider>
    );
  }
}
export default App;
