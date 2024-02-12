import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/rootStackParams';
import Drops from 'src/screens/drops/Drops';
import DropsDetail from 'src/screens/dropsDetail/DropsDetail';
import ButtonCircle from 'src/components/buttons/circle/Circle';
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DropsScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
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
        <Stack.Screen
          name="DropsDetailScreen"
          component={DropsDetail}
          options={({navigation, route}) => {
            return {
              title: '',
              headerRight: () => (
                <ButtonCircle selected={false} onButtonPress={() => {}} />
              ),
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
