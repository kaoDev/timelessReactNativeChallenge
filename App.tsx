import {UrQlProvider} from './graphql/urql';
import {ThemeProvider} from '@shopify/restyle';
import createTimelessTheme from './assets/createTimelessTheme';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './src/navigators/rootStackNavigator/RootStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from 'src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={createTimelessTheme()}>
          <UrQlProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </UrQlProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
