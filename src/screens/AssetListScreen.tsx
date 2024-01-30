import React, {FC, useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {AssetCard, Box} from '../components';
import {useAssetsList} from '../../queries';
import {RootStackScreenProps} from '../naviagtion';
import {AsyncStorageUtil} from '../utils';
import {ErrorBox, LoadingBox} from '../components/molecules';
import {useTheme} from '../../assets/createTimelessTheme';

export type AssetListScreenProps = RootStackScreenProps<'AssetsList'>;

export const AssetListScreen: FC<AssetListScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const [subscribedIds, setSubscribedIds] = useState<string[]>([]);

  const [{fetching, data, error}] = useAssetsList();

  useEffect(() => {
    AsyncStorageUtil.read('subscribedIds').then(ids => {
      if (ids) {
        setSubscribedIds(JSON.parse(ids));
      }
    });
  }, []);

  const onAssetPress = (id: string) => {
    navigation.navigate('AssetDetail', {assetId: id});
  };

  const onToggleSubscription = async (id: string) => {
    const updatedIds = subscribedIds.includes(id)
      ? subscribedIds.filter(subscribedId => subscribedId !== id)
      : [...subscribedIds, id];

    setSubscribedIds(updatedIds);
    await AsyncStorageUtil.write('subscribedIds', JSON.stringify(updatedIds));
  };

  if (fetching) {
    return <LoadingBox />;
  }

  if (error) {
    return <ErrorBox error={error} />;
  }

  const assets = data?.assets?.edges?.map(edge => edge.node) || [];

  return (
    <SafeAreaView>
      <FlatList
        data={assets}
        contentContainerStyle={{padding: theme.spacing.s}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Box style={{flex: 1}}>
            <AssetCard
              asset={item}
              onPress={() => onAssetPress(item.id)}
              onSubscribePress={() => onToggleSubscription(item.id)}
              isSubscribed={subscribedIds.includes(item.id)}
            />
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
