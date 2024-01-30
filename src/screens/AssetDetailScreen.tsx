import React, {FC} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet} from 'react-native';

import {Box, ErrorBox, LoadingBox, Text} from '../components';
import {useTheme} from '../../assets/createTimelessTheme';

import {useAsset} from '../../queries';
import {RootStackScreenProps} from '../naviagtion';
import FastImage from 'react-native-fast-image';

export type AssetDetailScreenProps = RootStackScreenProps<'AssetDetail'>;

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const IMG_HEIGHT = SCREEN_HEIGHT / 2;

export const AssetDetailScreen: FC<AssetDetailScreenProps> = ({route}) => {
  const theme = useTheme();
  const [{fetching, data, error}] = useAsset(route.params.assetId);

  if (fetching) {
    return <LoadingBox />;
  }

  if (error || !data?.asset) {
    return <ErrorBox error={error} />;
  }

  return (
    <ScrollView
      scrollEventThrottle={16}
      style={{
        backgroundColor: data?.asset.heroColour || 'transparent',
      }}>
      <FastImage
        style={[styles.imageCover]}
        source={{
          uri: data?.asset.heroImage,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Box
        bg="surface"
        borderRadius="l"
        mb="l"
        height="100%"
        py="m"
        px="s"
        style={theme.shadowVariants.elevation2}>
        <Text variant="h2">{data.asset.make}</Text>
        <Text variant="itemTitle" color="tlGray">
          {data.asset.model}
        </Text>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageCover: {
    height: IMG_HEIGHT,
    width: '100%',
  },
});
