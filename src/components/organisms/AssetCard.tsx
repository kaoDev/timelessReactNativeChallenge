import React, {FC} from 'react';
import {Image} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../../assets/createTimelessTheme';
import {Box, Text, TouchBox} from '..';
import {Asset} from '../../../graphql/graphql';

interface CardProps {
  asset: Partial<Asset>;
  onPress: (id: string) => void;
}

export const AssetCard: FC<CardProps> = ({asset, onPress}) => {
  const theme = useTheme<Theme>();

  return (
    <TouchBox
      activeOpacity={0.8}
      onPress={() => onPress(asset.id)}
      overflow="hidden"
      borderRadius="m"
      mt="s"
      style={{
        backgroundColor: `${asset.heroColour}`,
      }}>
      <Box aspectRatio={1}>
        <Box flex={2.5} pt="m">
          <Image
            source={{uri: asset.heroImage}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
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
