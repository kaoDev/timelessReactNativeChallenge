import {useState, useCallback} from 'react';
import {Text, View, RefreshControl, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DropsCard from 'src/components/cards/dropsCard/DropsCard';
import {useTheme} from 'assets/createTimelessTheme';

import SafeAreaContainer from 'src/components/safeAreaContainer/SafeAreaContainer';

import {RootStackParamList} from 'src/types/rootStackParams';

import {useAssetsList} from '../../../queries';

const Drops = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'DropsScreen'>) => {
  const [result, executeQuery] = useAssetsList();
  const theme = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const {fetching, data, error} = result;

  const paginatedAssets = data?.assets;
  const dropsData = paginatedAssets?.edges?.map(edge => edge.node);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    executeQuery();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaContainer edges={['top']}>
      {!fetching && (
        <FlatList
          data={dropsData}
          contentContainerStyle={{padding: theme.spacing.s}}
          renderItem={({item}) => (
            <DropsCard
              dropItem={item}
              onPress={(id: string) => {}}
              onFavoritePress={() => {}}
            />
          )}
          keyExtractor={item => item?.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaContainer>
  );
};

export default Drops;
