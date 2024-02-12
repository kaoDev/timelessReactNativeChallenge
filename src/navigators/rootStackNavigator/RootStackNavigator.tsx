import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/rootStackParams';
import {BottomTabNavigator} from 'src/navigators/tabNavigators';
// import Modal from 'src/screens/modal/Modal';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="BottomTabScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <RootStack.Group>
        <RootStack.Screen
          name="BottomTabScreen"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </RootStack.Group>

      {/* Add All Modal Screens here
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name="ModalScreen" component={Modal} />
      </RootStack.Group>*/}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
