import React from 'react';
import { SafeAreaView } from 'react-native';
import { useAssetsList } from '../../queries';
import styles from './AssetSelectionScreenStyles';
import { ActivityIndicatorOverlay } from '../components/overlays';
import { LOADING } from '../utils/Constants';

export type AssetSelectionScreenProps = {};

const AssetSelectionScreen: React.FC<AssetSelectionScreenProps> = ({ }) => {

  const [{ fetching, data, error }] = useAssetsList();
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicatorOverlay isVisible={fetching} label={LOADING} />
    </SafeAreaView>
  );
};

export default AssetSelectionScreen;

