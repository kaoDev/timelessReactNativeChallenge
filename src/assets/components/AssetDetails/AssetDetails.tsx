import React from "react";
import { View, Text } from "react-native";
import { AssetDetails as AssetDetailsType } from "../../api/type";
import styles from "./styles";
import { strings } from "../../../res";
import { AssetStatus } from "../AssetMenu/AssetMenu";
import { assetStatusToName } from "../../util/tools";

interface Props {
  details: AssetDetailsType;
  status: AssetStatus;
}

const Row = function Row({
  name,
  value,
  id,
}: {
  name: string;
  value: string;
  id: number;
}) {
  return (
    <View style={styles.row}>
      <View key={id} style={styles.nameValueContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const AssetDetails = function AssetDetails({
  details: { dataParsed },
  status,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{strings.assets.asset.details.title}</Text>
        <Text style={styles.assetStatus}>{assetStatusToName(status)}</Text>
      </View>
      {dataParsed.map(({ key, value }, index) => (
        <Row name={key} value={value} id={index} />
      ))}
    </View>
  );
};

export default AssetDetails;
