import React from 'react';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useAssetsList} from '../../graphql/queries.ts';
import AssetDetailScreen from '../AssetDetails';

const AssetCard: React.FC<{asset: any; onSelect: (id: string) => void}> = ({
  asset,
  onSelect,
}) => {
  return (
    <TouchableOpacity onPress={() => onSelect(asset.id)}>
      <View style={styles.card}>
        <View style={!!asset.heroColour && {backgroundColor: asset.heroColour}}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={{uri: asset?.heroImage}}
          />
        </View>
        <View style={[styles.container, {backgroundColor: asset.heroColour}]}>
          <Text style={styles.label}>{asset.label}</Text>
          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.priceLabel}>Drop Price</Text>
              <Text style={styles.price}>{asset.actualPrice} €</Text>
            </View>
            <View style={styles.alignEnd}>
              <Text style={styles.priceLabel}>Drop Market Value</Text>
              <Text style={styles.price}>{asset.price} €</Text>
            </View>
          </View>
        </View>
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
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.center}>
        <Text>Something went wrong! Please try later.</Text>
      </View>
    );
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
          contentContainerStyle={{padding: 8}}
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  card: {
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  priceLabel: {
    fontWeight: '300',
    fontSize: 14,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: '500',
    fontSize: 14,
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
});

export default AssetsListingScreen;
