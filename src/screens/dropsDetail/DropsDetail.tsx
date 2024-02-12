import * as React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTheme} from 'assets/createTimelessTheme';
import SafeAreaContainer from 'src/components/safeAreaContainer/SafeAreaContainer';
import {useAsset} from '../../../queries';
import {RootStackParamList} from 'src/types/rootStackParams';
import {Loading} from 'src/components/loading/Loading';
import {Error} from 'src/components/error/Error';
import {Box} from 'src/components/box/Box';
import {Text} from 'src/components/text/Text';

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: '60%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});

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
      <ScrollView
        style={{
          backgroundColor: data?.asset.heroColour || 'transparent',
        }}>
        <Image
          style={styles.image}
          source={{
            uri: data?.asset.heroImage ? data?.asset.heroImage : undefined,
          }}
        />
        <Text variant="h4" fontWeight={'300'}>
          {data?.asset.label}
        </Text>

        <Text variant="captions1">{data?.asset.actualPrice}</Text>
        <Text variant="captions1">{data?.asset.price}</Text>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default DropsDetail;
