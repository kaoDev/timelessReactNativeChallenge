import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import * as Screens from '../screens';
import DefaultScreenOptions from './DefaultScreenOptions';
import Routes from './Routes';

export type RootStackParamList = {
  AssetSelection: undefined;
  AssetDetail: { id: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation: React.FC = () => {

  const screenOptions = () => {
    return { ...DefaultScreenOptions };
  }

  return (
    <Stack.Navigator
      initialRouteName={Routes.AssetSelection}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={Routes.AssetSelection}
        component={Screens.AssetSelectionScreen} />
      <Stack.Screen
        name={Routes.AssetDetail}
        component={Screens.AssetDetailedScreen} />
    </Stack.Navigator>
  );
};
