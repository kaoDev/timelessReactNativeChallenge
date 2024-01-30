import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {AssetListScreen, AssetDetailScreen} from '../screens';

export type RootStackParamList = {
  AssetsList: undefined;
  AssetDetail: {assetId: string};
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackScreenNavigationProp<
  Screen extends keyof RootStackParamList,
> = NativeStackNavigationProp<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AssetsList">
      <Stack.Screen name="AssetsList" component={AssetListScreen} />
      <Stack.Screen name="AssetDetail" component={AssetDetailScreen} />
    </Stack.Navigator>
  );
};
