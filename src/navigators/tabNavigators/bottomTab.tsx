import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from 'src/types/rootStackParams';
import {useTheme} from '../../../assets/createTimelessTheme';
import {Text} from 'src/components/text/Text';

const theme = useTheme();

import {
  WalletStackNavigator,
  DropsStackNavigator,
  TradingStackNavigator,
  SettingsStackNavigator,
} from 'src/navigators/stackNavigators';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="DropsTab"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarItemStyle: {
          paddingTop: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'DropsTab') {
            iconName = 'home-variant-outline';
          } else if (route.name === 'WalletTab') {
            iconName = 'text-search';
          } else if (route.name === 'TradingTab') {
            iconName = 'heart-outline';
          } else if (route.name === 'SettingsTab') {
            iconName = 'shopping-outline';
          }

          return <View />;
        },
        tabBarActiveTintColor: theme.colors.tlBlue,
        tabBarInactiveTintColor: theme.colors.tlGray,
        tabBarLabel: ({color, focused}) => {
          let label = '';

          if (route.name === 'DropsTab') {
            label = 'Drops';
          } else if (route.name === 'WalletTab') {
            label = 'Wallet';
          } else if (route.name === 'TradingTab') {
            label = 'Trading';
          } else if (route.name === 'SettingsTab') {
            label = 'Settings';
          }

          return (
            <Text
              marginBottom={'s'}
              variant={'tab'}
              color={focused ? 'active' : 'inactive'}>
              {label}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="WalletTab" component={WalletStackNavigator} />
      <Tab.Screen name="DropsTab" component={DropsStackNavigator} />
      <Tab.Screen name="TradingTab" component={TradingStackNavigator} />
      <Tab.Screen name="SettingsTab" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
