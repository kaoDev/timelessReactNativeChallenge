import React from 'react';
import {useAssetsList} from '../../queries';

export type AssetSelectionScreenProps = {};

export const AssetSelectionScreen: React.FC<AssetSelectionScreenProps> = ({}) => {

  const [{fetching, data, error}] = useAssetsList();
  return null;
};
