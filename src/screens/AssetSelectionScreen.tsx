import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useAssetsList } from '../../queries';
import styles from './AssetSelectionScreenStyles';
import { ActivityIndicatorOverlay, Header, Text, AssetItemCard, MessageDialog, ErrorConnectionDialog } from '../components';
import { LOADING, DROPS, NO_ASSETS_MODAL, TRY_AGAIN } from '../utils/Constants';
import { groupBy } from 'lodash';
import { AssetItem } from '../components/cards/AssetItemCard';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export type AssetSelectionScreenProps = {};
export type GroupedData = { [key: string]: AssetItem[] };

const AssetSelectionScreen: React.FC<AssetSelectionScreenProps> = ({ }) => {
  const [{ fetching, data, error }] = useAssetsList();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const assets: AssetItem[] = (data?.assets?.edges?.map(edge => edge.node) || []);
  const types: GroupedData = groupBy(assets, 'type');
  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);

  // Call setForceUpdateFlag(true) to trigger a re-render
  const forceUpdate = () => {
    setForceUpdateFlag(prevState => !prevState);
  };

  const renderTitle = () => {
    return <Text variant={'titleTopNav'}>{DROPS}</Text>;
  }

  const renderErrorConnectionModal = () => {
    error?.message && !showErrorModal && !fetching && setShowErrorModal(true);
    return (
      <ErrorConnectionDialog
        isVisible={showErrorModal}
        buttonClick={() => {
          setShowErrorModal(false);
          forceUpdate();
        }}
      />
    );
  };

  const renderNoAssets = () => {
    return (
      <MessageDialog
        image={theme.images?.emptyAssets}
        title={NO_ASSETS_MODAL.title}
        description={NO_ASSETS_MODAL.description}
        buttonText={TRY_AGAIN}
        buttonClick={forceUpdate}
      />
    );
  };

  useEffect(() => {
  }, [forceUpdateFlag]);

  return (
    <SafeAreaView style={styles.container}>
      <Header borderless style={styles.header} left={renderTitle()} />
      <ActivityIndicatorOverlay isVisible={fetching} label={LOADING} />
      {renderErrorConnectionModal()}
      {!fetching && !showErrorModal && (
        <SafeAreaView style={styles.list}>
          <FlatList
            data={assets}
            renderItem={({ item }) => <AssetItemCard assetItem={item} />}
            ListEmptyComponent={renderNoAssets}
            keyExtractor={item => item?.id}
          />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default AssetSelectionScreen;

