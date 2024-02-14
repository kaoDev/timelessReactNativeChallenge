import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useAssetsList } from '../../queries';
import styles from './AssetSelectionScreenStyles';
import { ActivityIndicatorOverlay, Header, Box, Text, AssetItemCard, MessageDialog, ErrorConnectionDialog } from '../components';
import { LOADING, DROPS, NO_ASSETS_MODAL, TRY_AGAIN } from '../utils/Constants';
import { groupBy, sortBy } from 'lodash';
import { AssetItem } from '../components/cards/AssetItemCard';
import { useTheme } from '@shopify/restyle';
import { getItem } from '../utils/AsyncStorageUtils';
import { Theme } from '../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export type AssetSelectionScreenProps = {};
export type GroupedData = { [key: string]: AssetItem[] };

const AssetSelectionScreen: React.FC<AssetSelectionScreenProps> = ({ }) => {

  const flatListRef: React.RefObject<FlatList> = useRef<FlatList>(null);
  const [{ fetching, data, error }] = useAssetsList();
  const assets: AssetItem[] = (data?.assets?.edges?.map(edge => edge.node) || []);
  const favouriteItems: AssetItem[] = [];
  assets?.map(async (item: AssetItem) => {
    getItem(`${item?.type}-${item?.id}`).then((value: string | null) => {
      if (value) favouriteItems.push(item);
    });
  });
  const favouriteData: GroupedData = { ['Favourites']: favouriteItems }
  const newData: GroupedData = { ['New']: [...sortBy(assets, 'dropDate')] };
  const types: GroupedData = Object.assign(groupBy(assets, 'type'), Object.assign(favouriteData, newData));
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('New');

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
    return !assets && (
      <MessageDialog
        image={theme.images?.emptyAssets}
        title={NO_ASSETS_MODAL.title}
        description={NO_ASSETS_MODAL.description}
        buttonText={TRY_AGAIN}
        buttonClick={forceUpdate}
      />
    );
  };

  const renderGroupItem = (type: string, index: number) => {
    const isSelected = selectedType == type;
    return (
      <TouchableOpacity style={styles.itemContainer}
        onPress={() => {
          setSelectedType(type);
          flatListRef?.current?.scrollToIndex({ index: index });
        }}>
        <Text variant={'titleMd'} color={!isSelected ? 'inactive' : 'active'}>{`${type[0].toUpperCase()}${type.slice(1)}`}</Text>
        {isSelected && <Box borderBottomColor={'active'} marginTop={'xxs'} borderBottomWidth={2} />}
      </TouchableOpacity>
    )
  };

  const renderTypeItems = () => {
    return selectedType && (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={types[selectedType]}
        renderItem={({ item }) => <AssetItemCard assetItem={item} subscribedIconClick={forceUpdate}  />}
        ListEmptyComponent={renderNoAssets}
        style={styles.itemList}
        contentContainerStyle={styles.itemListContainer}
        keyExtractor={item => item?.id}
      />
    )
  };

  useEffect(() => {
  }, [forceUpdateFlag]);

  return (
    <SafeAreaView style={styles.container}>
      <Header borderless style={styles.header} left={renderTitle()} />
      <ActivityIndicatorOverlay isVisible={fetching} label={LOADING} />
      {renderErrorConnectionModal()}
      {!fetching && !showErrorModal && (
        <SafeAreaView>
          <Box style={styles.list}>
            <FlatList
              ref={flatListRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Object.keys(types).reverse()}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) => renderGroupItem(item, index)} />
          </Box>
          {renderTypeItems()}
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default AssetSelectionScreen;
