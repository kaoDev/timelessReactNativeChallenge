import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './AssetItemCardStyles';
import { Box, Text } from '../index';
import Responsive from '../../utils/Responsive';
import { useTheme } from '@shopify/restyle';
import { setItem, getItem, removeItem } from '../../utils/AsyncStorageUtils';
import { Theme } from '../../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

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

type AssetItemCardProps = { assetItem: AssetItem,  subscribedIconClick?: void | (() => void);
};

const AssetItemCard: React.FC<AssetItemCardProps> = ({ assetItem,   subscribedIconClick = () => null, }) => {

  const [isSubscribed, setIsSubscribed] = useState(false);

  const darkenColor = (color: String, percent: number) => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return `rgba(${R},${G},${B},0.2)`;
  };

  const onPressIcon = async () => {
    if (!isSubscribed) {
      await setItem(`${assetItem?.type}-${assetItem?.id}`, assetItem?.id);
      setIsSubscribed(true);
    } else {
      await removeItem(`${assetItem?.type}-${assetItem?.id}`);
      setIsSubscribed(false);
    }
    subscribedIconClick();
  }

  const renderTextContainer = (firstText: String, secondText: String, fontWeight: String | any, lineHeight: number = 16) => {
    return (
      <Box flexDirection={'row'} justifyContent={'space-between'}>
        <Text variant="captions1" lineHeight={Responsive.font(lineHeight)} fontSize={Responsive.font(13)} fontWeight={fontWeight} >{firstText}</Text>
        <Text variant="captions1" lineHeight={Responsive.font(lineHeight)} fontSize={Responsive.font(13)} fontWeight={fontWeight}>{secondText}</Text>
      </Box>);
  }

  const renderIcon = () => {
    return (
      <TouchableOpacity onPress={onPressIcon} style={styles.iconContainer} >
        <Image style={{ width: theme.iconSize?.s, height: theme.iconSize?.s }} source={isSubscribed ? theme.icons?.heartFilled : theme.icons?.heart} />
        {assetItem?.countLikes !== 0 && <Text variant={'captions1'} color={'typographyDisabled'}
          marginLeft={'xxs'}>{isSubscribed ? (assetItem?.countLikes + 1) : assetItem?.countLikes}</Text>}
      </TouchableOpacity>);
  }

  useEffect(() => {
    // Retrieve data from AsyncStorage
    getItem(`${assetItem?.type}-${assetItem?.id}`).then((value: string | null) => {
      if (value) setIsSubscribed(true);
    });
  }, []);

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: assetItem?.heroColour, }]}
      onPress={() => null}>
      {renderIcon()}
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
