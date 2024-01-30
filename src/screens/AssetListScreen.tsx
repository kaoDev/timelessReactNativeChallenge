import React, {FC} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {AssetCard, Box, Text} from '../components';
import {useAssetsList} from '../../queries';
import {RootStackScreenProps} from '../naviagtion';
import {ErrorBox, LoadingBox} from '../components/molecules';
import {useTheme} from '../../assets/createTimelessTheme';
import {Asset} from '../../graphql/graphql';

export type AssetListScreenProps = RootStackScreenProps<'AssetsList'>;

export const AssetListScreen: FC<AssetListScreenProps> = ({navigation}) => {
  const theme = useTheme();

  const [{fetching, data, error}] = useAssetsList();

  const onAssetPress = (id: string) => {
    console.log('navigate');
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
      <FlatList<Partial<Asset>>
        data={assets}
        contentContainerStyle={{padding: theme.spacing.s}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Box style={{flex: 1}}>
            <AssetCard asset={item} onPress={() => onAssetPress(item.id)} />
          </Box>
        )}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};
