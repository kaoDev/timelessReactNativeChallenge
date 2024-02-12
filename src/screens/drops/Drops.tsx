import * as React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import SafeAreaContainer from 'src/components/safeAreaContainer/SafeAreaContainer';

import {RootStackParamList} from 'src/types/rootStackParams';

const Drops = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'DropsScreen'>) => {
  return (
    <SafeAreaContainer edges={['top']}>
      <View style={{flex: 1}}>
        <Text>{'Drops Screen'}</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default Drops;
