import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface IBasicDetails {
  item: any;
}

const BasicDetails: FC<IBasicDetails> = React.memo((props: IBasicDetails) => {
  const { item } = props;

  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
});

export { BasicDetails };
