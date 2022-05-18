import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import bell from "../../../assets/icons/bell.png";
import share from "../../../assets/icons/share_01.png";
import close from "../../../assets/icons/close.png";
import testIDs from "../../res/testIDs";

interface Props {
  title: string;
  model?: string;
  modalMode?: boolean;
}

const Header = function Header({ title, model, modalMode = false }: Props) {
  const navigation = useNavigation();

  const TouchableIcon = function TouchableIcon({
    onPress,
    icon,
  }: {
    onPress: () => void;
    icon: any;
  }) {
    return (
      <TouchableWithoutFeedback style={styles.iconView} onPress={onPress}>
        <Image source={icon} style={styles.icon} />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      {modalMode && (
        <View style={styles.container}>
          <TouchableIcon onPress={() => navigation.goBack()} icon={close} />
          <View style={styles.bellShareContainer}>
            <TouchableIcon onPress={() => {}} icon={share} />
            <TouchableIcon onPress={() => {}} icon={bell} />
          </View>
        </View>
      )}
      <Text
        testID={testIDs.assets.list.header.title.id}
        style={styles.title}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {title}
      </Text>
      {modalMode && (
        <Text style={styles.model} numberOfLines={1} adjustsFontSizeToFit>
          {model}
        </Text>
      )}
    </>
  );
};

export default Header;
