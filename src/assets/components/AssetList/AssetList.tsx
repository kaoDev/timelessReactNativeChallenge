import React, { useEffect, useState } from "react";
import { FlatList, Text, useColorScheme, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AssetItem from "./AssetItem";
import AssetItemContentLoader from "./AssetItem/AssetItemContentLoader";
import { ASSET_SCREEN } from "../../Screens/AssetsStack/AssetScreen";
import { AssetsStackParamList } from "../../Screens/AssetsStack/AssetsStack";
import { Asset, Assets } from "../../api/type";
import Header from "../../../components/Header";
import { useThemeDispatch } from "../../../context/theme/Provider";
import { toggleTheme } from "../../../context/theme/Actions";
import styles from "./styles";
import useFetchAssets from "../../api/useFetchAssets";
import { Status } from "../../../util/useAsync";
import { strings } from "../../../res";
import AssetMenu from "../AssetMenu";

const AssetList = function AssetList() {
  const IS_DARK_MODE = "dark";
  const isColorSchemeDark = useColorScheme() === IS_DARK_MODE;
  const dispatch = useThemeDispatch();

  useEffect(() => {
    // dispatch(toggleTheme(isColorSchemeDark));
  }, [isColorSchemeDark, dispatch]);

  const navigation = useNavigation<StackNavigationProp<AssetsStackParamList>>();
  const INITIAL_NUM_TO_RENDER = 3;

  const [assets, setAssets] = useState([]);

  const [assetStatus, setAssetStatus] = useState(null);
  const FIRST = 10;

  const { loading, error, data } = useFetchAssets<Assets>(FIRST, assetStatus);

  useEffect(() => {
    if (data?.data?.assets?.edges) {
      const newAssets = data.data.assets.edges.map(
        (edge: { node: any }) => edge.node
      );
      setAssets(newAssets);
    }
  }, [data]);

  if (error === Status.Error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>;
  }

  const onPressAssetItem = (item: Asset) => {
    navigation.navigate(ASSET_SCREEN, { item });
  };

  const renderItem = ({ item }: { item: Asset }) => (
    <AssetItem item={item} onPressAssetItem={() => onPressAssetItem(item)} />
  );

  return (
    <>
      <Header title={strings.assets.title} />
      <AssetMenu setAssetStatus={setAssetStatus} />
      {loading === Status.Pending && (
        <View style={styles.loading}>
          <AssetItemContentLoader />
          <AssetItemContentLoader />
          <AssetItemContentLoader />
        </View>
      )}
      <FlatList
        data={assets}
        style={styles.flatList}
        initialNumToRender={INITIAL_NUM_TO_RENDER}
        refreshing={loading === Status.Pending}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        onEndReachedThreshold={0.9}
      />
    </>
  );
};

export default AssetList;
