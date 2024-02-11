import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './AssetItemCardStyles';
import { Box, Text } from '../index';
import Responsive from '../../utils/Responsive';

export type AssetItem = {
  actualPrice: number;
  averageMarketPrice: number;
  collectorsClubType: string;
  countLikes: number;
  dropDate: string;
  exitDate: string;
  exitPrice: number;
  heroColour: string;
  heroImage: string;
  id: string;
  label: string;
  make: string;
  model: string;
  price: number;
  pricePerShare: number;
  status: string;
  type: string;
};

type AssetItemCardProps = { assetItem: AssetItem };

const AssetItemCard: React.FC<AssetItemCardProps> = ({ assetItem }) => {

  const darkenColor = (color: String, percent: number) => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return `rgba(${R},${G},${B},0.2)`;
  };

  const renderTextContainer = (firstText: String, secondText: String, fontWeight: String | any, lineHeight: number = 16) => {
    return (
      <Box flexDirection={'row'} justifyContent={'space-between'}>
        <Text variant="captions1" lineHeight={Responsive.font(lineHeight)} fontSize={Responsive.font(13)} fontWeight={fontWeight} >{firstText}</Text>
        <Text variant="captions1" lineHeight={Responsive.font(lineHeight)} fontSize={Responsive.font(13)} fontWeight={fontWeight}>{secondText}</Text>
      </Box>);
  }

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: assetItem?.heroColour, }]}
      onPress={() => null}>
      <Image style={styles.image} source={{ uri: assetItem?.heroImage }} />
      <Box style={[styles.content, { backgroundColor: darkenColor(assetItem?.heroColour, 20) }]}>
        <Text marginBottom={'s'} variant={'titleMd'}>{assetItem?.label}</Text>
        {renderTextContainer('Drop Market Value', 'Our Drop Price', '300')}
        {renderTextContainer(`${assetItem?.price} €`, `${assetItem?.actualPrice} €`, '500', 24)}
      </Box>
    </TouchableOpacity>
  );
};

export default AssetItemCard;
