import React from "react";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./styles";
import colors from "../../../../assets/colors";
import { GalleryItem } from "../../api/type";

interface Props {
  slides: GalleryItem[];
}

const AssetSlider = function AssetSlider({ slides }: Props) {
  return (
    <View style={styles.container}>
      <Swiper
        dotStyle={styles.dotStyle}
        dotColor={colors.white}
        activeDotColor="#bbbbbb"
        prevButton={<Text style={styles.button}>‹</Text>}
        nextButton={<Text style={styles.button}>›</Text>}
        showsButtons
        paginationStyle={styles.pagination}
      >
        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <Image source={{ uri: slide.mediumUrl }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default AssetSlider;
