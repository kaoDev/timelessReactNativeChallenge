import * as React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import SafeAreaContainer from 'src/components/safeAreaContainer/SafeAreaContainer';

import {RootStackParamList} from 'src/types/rootStackParams';

const Tradings = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'TradingScreen'>) => {
  return (
    <SafeAreaContainer edges={['top']}>
      <View style={{flex: 1}}>
        <Text>{'Trading Screen'}</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default Tradings;
