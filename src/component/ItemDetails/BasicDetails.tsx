import React, { FC } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import colors from '../../../assets/colors';
import spacing from '../../../assets/spacing';
import { textVariants } from '../../../assets/textVariants';

interface IBasicDetails {
  itemData: any;
}
export const { width: DEVICE_WIDTH } = Dimensions.get('window');

const BasicDetails: FC<IBasicDetails> = ({ itemData }: IBasicDetails) => {
  const imageList = itemData?.assetGallery?.map((item: any) => {
    return { illustration: item?.url, title: '', subTitle: '' };
  });

  const renderItem = ({ item, index }: any, parallaxProps: any) => {
    return (
      <TouchableOpacity>
        <ParallaxImage
          key={index}
          source={{ uri: item?.illustration }}
          containerStyle={{ width: 256, height: 256 }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        padding: spacing.m,
      }}>
      <Text style={[textVariants.h3, { color: colors.primary800 }]}>
        {itemData?.label}
      </Text>

      {imageList ? (
        <Carousel
          data={imageList}
          renderItem={renderItem}
          sliderWidth={DEVICE_WIDTH * 0.8}
          itemWidth={DEVICE_WIDTH * 0.5}
          // hasParallaxImages={true}
        />
      ) : (
        <Image source={{ uri: itemData?.heroImage }} style={styles.image} />
      )}

      <View style={styles.itemRow}>
        <Text style={[textVariants.titleMd, { color: colors.primary800 }]}>
          Release year:
        </Text>
        <Text style={[textVariants.titleMd, { color: colors.primary800 }]}>
          {itemData?.assetAbout?.releaseDate}
        </Text>
      </View>

      <View style={styles.itemRow}>
        <Text style={[textVariants.titleMd, { color: colors.primary800 }]}>
          Make:
        </Text>
        <Text style={[textVariants.titleMd, { color: colors.primary800 }]}>
          {itemData?.assetAbout?.make}
        </Text>
      </View>

      <View style={styles.itemRow}>
        <Text style={[textVariants.titleMd, { color: colors.primary800 }]}>
          Model:
        </Text>
        <Text style={[textVariants.titleMd, { color: colors.primary800 }]}>
          {itemData?.assetAbout?.model}
        </Text>
      </View>
    </View>
  );
};

export { BasicDetails };

const styles = StyleSheet.create({
  itemRow: { justifyContent: 'space-between', flexDirection: 'row' },
  image: { width: 128, height: 128, alignSelf: 'center' },
});
