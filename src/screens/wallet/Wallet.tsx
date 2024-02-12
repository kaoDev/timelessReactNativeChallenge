import * as React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import SafeAreaContainer from 'src/components/safeAreaContainer/SafeAreaContainer';

import {RootStackParamList} from 'src/types/rootStackParams';

const Wallet = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'WalletScreen'>) => {
  return (
    <SafeAreaContainer edges={['top']}>
      <View style={{flex: 1}}>
        <Text>{'Wallet Screen'}</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default Wallet;
