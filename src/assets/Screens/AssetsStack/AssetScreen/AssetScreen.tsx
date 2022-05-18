import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import AssetDetails from "../../../components/AssetDetails";
import Header from "../../../../components/Header";
import AssetSlider from "../../../components/AssetSlider";
import { Asset } from "../../../api/type";

export const ASSET_SCREEN = "ASSET_SCREEN";

const AssetScreen = function AssetScreen() {
  const route = useRoute();

  const {
    item: { label, gallery, assetDetails, status, model },
  }: { item: Asset } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <Header modalMode title={label} model={model} />
        <AssetSlider slides={gallery} />
        <AssetDetails details={assetDetails[0]} status={status} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssetScreen;
