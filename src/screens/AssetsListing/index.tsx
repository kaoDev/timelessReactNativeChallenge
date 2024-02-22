import React from 'react';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useAssetsList} from '../../graphql/queries.ts';
import AssetDetailScreen from '../AssetDetails';
import NotificationBadge from '../../components/NotificationBadge';
import spacing from '../../theme/spacing.ts';
import ListingFooter from '../../components/ListingFooter';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const AssetCard: React.FC<{asset: any; onSelect: (id: string) => void}> = ({
  asset,
  onSelect,
}) => {
  const onPress = () => {
    onSelect(asset.id);
  };
  return (
    <TouchableOpacity onPress={onPress} testID={`assetCard-${asset.id}`}>
      <View style={styles.card}>
        <View style={!!asset.heroColour && {backgroundColor: asset.heroColour}}>
          <View style={styles.notification}>
            <NotificationBadge id={asset.id} />
          </View>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={{uri: asset?.heroImage}}
          />
        </View>
        <ListingFooter asset={asset} />
      </View>
    </TouchableOpacity>
  );
};

const AssetsListingScreen = () => {
  const [selectedAsset, setSelectedAsset] = React.useState<string | null>(null);
  const [{data, fetching, error}] = useAssetsList();

  const handleSelectAsset = (id: string) => {
    setSelectedAsset(id);
  };

  if (fetching) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      {selectedAsset ? (
        <AssetDetailScreen
          id={selectedAsset}
          onBack={() => setSelectedAsset(null)}
        />
      ) : (
        <FlatList
          contentContainerStyle={{padding: spacing.xs}}
          showsVerticalScrollIndicator={false}
          data={data?.assets?.edges?.map(edge => edge.node)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <AssetCard asset={item} onSelect={handleSelectAsset} />
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: spacing.xs,
    marginBottom: spacing.xs,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  notification: {
    right: spacing.xs,
    position: 'absolute',
    top: spacing.s,
    zIndex: 1,
  },
});

export default AssetsListingScreen;
