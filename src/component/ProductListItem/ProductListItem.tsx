import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface IProductListItem {
  item: any;
}

const ProductListItem: FC<IProductListItem> = React.memo(
  (props: IProductListItem) => {
    const { item } = props;

    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  },
);

export { ProductListItem };
