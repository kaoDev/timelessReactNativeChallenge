import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ASSETS_SCREEN, AssetsScreen } from "./AssetsScreen";
import { ASSET_SCREEN, AssetScreen } from "./AssetScreen";
import { Asset } from "../../api/type";

export const ASSETS_STACK = "ASSETS_STACK";

export type AssetsStackParamList = {
  [ASSETS_SCREEN]: { id: string };
  [ASSET_SCREEN]: { item: Asset };
};

const Stack = createNativeStackNavigator();

const AssetsStack = function AssetsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ASSETS_SCREEN} component={AssetsScreen} />
      <Stack.Screen name={ASSET_SCREEN} component={AssetScreen} />
    </Stack.Navigator>
  );
};

export default AssetsStack;
