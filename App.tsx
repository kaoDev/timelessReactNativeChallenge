import React, {PureComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AssetSelectionScreen} from './src/screens/AssetSelectionScreen';
import {UrQlProvider} from './graphql/urql';

interface AppProps {}
interface IAppState {}
const Stack = createStackNavigator();

class App extends PureComponent<AppProps, IAppState> {
  render() {
    return (
      <UrQlProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AssetSelection">
          <Stack.Screen
            name="AssetSelection"
            component={AssetSelectionScreen}
            options={{title: 'Timeless Investments'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UrQlProvider>
    );
  }
}

export default App;
