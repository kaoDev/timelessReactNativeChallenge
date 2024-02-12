import {UrQlProvider} from './graphql/urql';
import {ThemeProvider} from '@shopify/restyle';
import createTimelessTheme from './assets/createTimelessTheme';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './src/navigators/rootStackNavigator/RootStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <ThemeProvider theme={createTimelessTheme()}>
      <UrQlProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </UrQlProvider>
    </ThemeProvider>
  );
}
