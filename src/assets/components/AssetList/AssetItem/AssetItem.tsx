import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { Asset } from "../../../api/type";
import Card from "../../../../components/Card";
import bell from "../../../../../assets/icons/bell.png";
import { assetStatusToName } from "../../../util/tools";
import testIDs from "../../../../res/testIDs";

interface Props {
  item: Asset;
  onPressAssetItem: () => void;
}

const AssetItem = function AssetItem({
  item: { id, label, heroImage, heroColour, status, model },
  onPressAssetItem,
}: Props) {
  return (
    <View key={id} testID={testIDs.assets.list.item.id}>
      <Card>
        <TouchableOpacity onPress={onPressAssetItem}>
          <>
            <View style={styles.container(heroColour)}>
              <View style={styles.emptyView} />
              <ImageBackground
                source={{ uri: heroImage }}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
              />
              <Text style={styles.label}>{label}</Text>
              <Text style={styles.model}>{model}</Text>
            </View>
            <View style={styles.header}>
              <View style={styles.banderol}>
                <Text style={styles.banderolText}>
                  {assetStatusToName(status)}
                </Text>
              </View>
              <View style={styles.bellView}>
                <Image
                  source={require("../../../../../assets/icons/bell.png")}
                  style={styles.bell}
                />
              </View>
            </View>
          </>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default AssetItem;
