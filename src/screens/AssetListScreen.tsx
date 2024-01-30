import React, {FC} from 'react';
import {Box} from '../components';
import {RootStackScreenProps} from '../naviagtion';
import {useTheme} from '../../assets/createTimelessTheme';

export type AssetListScreenProps = RootStackScreenProps<'AssetsList'>;

export const AssetListScreen: FC<AssetListScreenProps> = ({navigation}) => {
  const theme = useTheme();

  return <Box></Box>;
};
