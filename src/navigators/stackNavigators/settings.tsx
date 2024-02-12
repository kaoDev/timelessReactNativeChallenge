import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/rootStackParams';
import Settings from 'src/screens/settings/Settings';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <Stack.Group>
        <Stack.Screen
          name="SettingsScreen"
          component={Settings}
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
