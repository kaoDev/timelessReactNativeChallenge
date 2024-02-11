import React from 'react';
import { SafeAreaView } from 'react-native';
import { useAssetsList } from '../../queries';
import styles from './AssetSelectionScreenStyles';
import { ActivityIndicatorOverlay, Header, Text } from '../components';
import { LOADING, DROPS } from '../utils/Constants';

export type AssetSelectionScreenProps = {};

const AssetSelectionScreen: React.FC<AssetSelectionScreenProps> = ({ }) => {

  const [{ fetching, data, error }] = useAssetsList();

  const renderTitle = () => {
    return <Text variant={'titleTopNav'}>{DROPS}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header borderless style={styles.header} left={renderTitle()} />
      <ActivityIndicatorOverlay isVisible={fetching} label={LOADING} />
    </SafeAreaView>
  );
};

export default AssetSelectionScreen;

