import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useAssetsList } from '../../queries';
import styles from './AssetSelectionScreenStyles';
import { ActivityIndicatorOverlay, Header, Text, AssetItemCard } from '../components';
import { LOADING, DROPS } from '../utils/Constants';
import { groupBy } from 'lodash';
import {AssetItem} from '../components/cards/AssetItemCard';

export type AssetSelectionScreenProps = {};
export type GroupedData = { [key: string]: AssetItem[] };

const AssetSelectionScreen: React.FC<AssetSelectionScreenProps> = ({ }) => {

  const [{ fetching, data, error }] = useAssetsList();
  const assets :  AssetItem[]  = (data?.assets?.edges?.map(edge => edge.node) || []);
  const types : GroupedData = groupBy(assets, 'type');

  const renderTitle = () => {
    return <Text variant={'titleTopNav'}>{DROPS}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header borderless style={styles.header} left={renderTitle()} />
      <ActivityIndicatorOverlay isVisible={fetching} label={LOADING} />
      {!fetching && (
        <SafeAreaView style={styles.list}>
          <FlatList
            data={assets}
            renderItem={({ item }) => <AssetItemCard assetItem={item} />}
            keyExtractor={item => item?.id}
          />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default AssetSelectionScreen;

