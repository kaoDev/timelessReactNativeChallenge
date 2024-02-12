import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTheme} from 'assets/createTimelessTheme';
import SafeAreaContainer from 'src/components/safeAreaContainer/SafeAreaContainer';
import {useAsset} from '../../../queries';
import {RootStackParamList} from 'src/types/rootStackParams';
import {Loading} from 'src/components/loading/Loading';
import {Error} from 'src/components/error/Error';

const DropsDetail = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'DropsDetailScreen'>) => {
  const theme = useTheme();
  const [result] = useAsset(route.params.dropId);
  const {fetching, data, error} = result;

  if (fetching) {
    return <Loading />;
  }

  if (error || !data?.asset) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaContainer edges={['top']}>
      <ScrollView style={{flex: 1}}>
        <Text>{JSON.stringify(data?.asset)}</Text>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default DropsDetail;
