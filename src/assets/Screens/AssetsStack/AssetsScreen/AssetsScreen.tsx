import React from "react";
import { SafeAreaView } from "react-native";
import AssetList from "../../../components/AssetList";

export const ASSETS_SCREEN = "ASSETS_SCREEN";

const AssetsScreen = function AssetsScreen() {
  return (
    <SafeAreaView>
      <AssetList />
    </SafeAreaView>
  );
};

export default AssetsScreen;
