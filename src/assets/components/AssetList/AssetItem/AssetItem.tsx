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

interface Props {
  item: Asset;
  onPressAssetItem: () => void;
}

const AssetItem = function AssetItem({
  item: { id, label, heroImage, heroColour, status, model },
  onPressAssetItem,
}: Props) {
  return (
    <Card>
      <TouchableOpacity onPress={onPressAssetItem} key={id}>
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
              <Image source={bell} style={styles.bell} />
            </View>
          </View>
        </>
      </TouchableOpacity>
    </Card>
  );
};

export default AssetItem;
