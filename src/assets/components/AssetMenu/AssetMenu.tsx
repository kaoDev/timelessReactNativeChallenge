import { Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

interface Props {
  setAssetStatus: any;
}

export enum AssetStatus {
  ComingSoon = "coming_soon",
  Open = "open",
  Financed = "financed",
  Trading = "trading",
  Exited = "exited",
}

export enum AssetStatusNames {
  All = "Alle anzeigen",
  ComingSoon = "Bald verfugbar",
  Financed = "Ausverkauft",
}

const AssetMenu = function AssetMenu({ setAssetStatus }: Props) {
  const [active, setActive] = useState(0);

  const TouchableLabel = function TouchableLabel({
    onPress,
    text,
    isActive,
  }: {
    onPress: () => void;
    text: string;
    isActive: boolean;
  }) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Text style={styles.text(isActive)}>{text}</Text>
          <View style={styles.borderBottom(isActive)} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableLabel
        onPress={() => {
          setAssetStatus(null);
          setActive(0);
        }}
        text={AssetStatusNames.All}
        isActive={active === 0}
      />
      <TouchableLabel
        onPress={() => {
          setAssetStatus(AssetStatus.ComingSoon);
          setActive(1);
        }}
        text={AssetStatusNames.ComingSoon}
        isActive={active === 1}
      />
      <TouchableLabel
        onPress={() => {
          setAssetStatus(AssetStatus.Financed);
          setActive(2);
        }}
        text={AssetStatusNames.Financed}
        isActive={active === 2}
      />
    </View>
  );
};

export default AssetMenu;
