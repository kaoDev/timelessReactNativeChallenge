import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/rootStackParams';
import Trading from 'src/screens/trading/Trading';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TradingScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <Stack.Group>
        <Stack.Screen
          name="TradingScreen"
          component={Trading}
          options={() => ({
            title: '',
            headerShown: false,
            gestureEnabled: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
