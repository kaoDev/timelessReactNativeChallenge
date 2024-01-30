import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './RootStack';

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
