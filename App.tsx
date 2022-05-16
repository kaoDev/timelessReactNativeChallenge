/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "./src/context/theme/Provider";
import { AssetsStack, ASSETS_STACK } from "./src/assets/Screens/AssetsStack";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: "https://graph.cdn.timeless-internal.net/graphql",
  cache: new InMemoryCache(),
});

const App = function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Stack.Navigator
            initialRouteName={ASSETS_STACK}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={ASSETS_STACK} component={AssetsStack} />
          </Stack.Navigator>
        </ThemeProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
