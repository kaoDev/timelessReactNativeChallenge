import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/rootStackParams';
import Drops from 'src/screens/drops/Drops';
import DropsDetail from 'src/screens/dropsDetail/DropsDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DropsScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <Stack.Group>
        <Stack.Screen
          name="DropsScreen"
          component={Drops}
          options={() => ({
            title: '',
            headerShown: false,
            gestureEnabled: false,
          })}
        />
        <Stack.Screen name="DropsDetailScreen" component={DropsDetail} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
