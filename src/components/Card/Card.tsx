import React from "react";
import { View } from "react-native";
import styles from "./styles";

interface Props {
  children: React.ReactNode;
  marginVertical?: number | undefined;
  marginHorizontal?: number | undefined;
  style?: any;
}

const Card = function Card({
  marginVertical = undefined,
  marginHorizontal = undefined,
  style,
  children,
}: Props) {
  return (
    <View style={[styles.container(marginVertical, marginHorizontal), style]}>
      {children}
    </View>
  );
};

export default Card;
