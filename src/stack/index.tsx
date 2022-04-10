import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopNavigatorTab from './TopNavigator';
import ProductDetails from '../screen/ProductDetails';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drops" component={TopNavigatorTab} />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export { StackNavigator };
