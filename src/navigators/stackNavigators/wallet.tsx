import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/rootStackParams';
import Wallet from 'src/screens/wallet/Wallet';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WalletScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <Stack.Group>
        <Stack.Screen
          name="WalletScreen"
          component={Wallet}
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
