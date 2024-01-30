import React, {FC} from 'react';
import {Image} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../../assets/createTimelessTheme';
import {Box, Text, TouchBox} from '..';
import icons from '../../../assets/icons';
import {Asset} from '../../../graphql/graphql';
import FastImage from 'react-native-fast-image';

interface CardProps {
  asset: Partial<Asset>;
  onPress: () => void;
  onSubscribePress: () => void;
  isSubscribed: boolean;
}

export const AssetCard: FC<CardProps> = ({
  asset,
  onPress,
  onSubscribePress,
  isSubscribed,
}) => {
  const theme = useTheme<Theme>();

  return (
    <TouchBox
      activeOpacity={0.8}
      onPress={onPress}
      overflow="hidden"
      borderRadius="m"
      mt="s"
      style={{
        backgroundColor: `${asset.heroColour}`,
      }}>
      <Box aspectRatio={1}>
        <TouchBox
          position="absolute"
          alignSelf="flex-end"
          p="s"
          zIndex={1}
          onPress={onSubscribePress}>
          <Image
            source={isSubscribed ? icons.bellFilled : icons.bell}
            style={{width: theme.iconSize.m}}
          />
        </TouchBox>
        <Box flex={2.5} pt="m">
          <FastImage
            source={{uri: asset.heroImage}}
            style={{width: '100%', height: '100%'}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Box>
        <Box
          flex={1}
          padding="m"
          bg="doughnutGraphSegment1"
          justifyContent="space-between">
          <Text variant="h6" marginBottom="s">
            {asset.label}
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box>
              <Text variant="captions1" fontWeight="300">
                Drop Market Value
              </Text>
              <Text
                pt="xxs"
                variant="captions1"
                fontWeight="500">{`${asset.actualPrice}€`}</Text>
            </Box>
            <Box alignItems="flex-end">
              <Text variant="captions1" fontWeight="300">
                Our Drop Price
              </Text>
              <Text
                variant="captions1"
                fontWeight="500">{`${asset.actualPrice}€`}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </TouchBox>
  );
};
