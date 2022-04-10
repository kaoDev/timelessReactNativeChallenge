import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductList from '../screen/ProductList';
import colors from '../../assets/colors';

const Tab = createMaterialTopTabNavigator();

const TopNavigatorTab = (props: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.facebookBlue,
        tabBarInactiveTintColor: colors.primary400,
        tabBarLabelStyle: {
          textTransform: 'none',
        },
      }}>
      <Tab.Screen
        name="Alle anzeigen"
        children={() => <ProductList type="showAll" {...props} />}
      />
      <Tab.Screen
        name="Bald verfügbar"
        children={() => <ProductList type="availableSoon" {...props} />}
      />
      <Tab.Screen
        name="Ausverkauft"
        children={() => <ProductList type="soldOut" {...props} />}
      />
    </Tab.Navigator>
  );
};
export default TopNavigatorTab;
