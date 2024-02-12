import * as React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import SafeAreaContainer from 'src/components/safeAreaContainer/SafeAreaContainer';

import {RootStackParamList} from 'src/types/rootStackParams';

const Settings = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SettingsScreen'>) => {
  return (
    <SafeAreaContainer edges={['top']}>
      <View style={{flex: 1}}>
        <Text>{'Drops Screen'}</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default Settings;
