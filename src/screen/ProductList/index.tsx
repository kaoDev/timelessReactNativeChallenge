import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import { ProductListItem } from '../../component';
import { styles } from './styles';
import useFetchData from '../../hooks/useFetchData';

interface IProductList {
  type: 'availableSoon' | 'soldOut' | 'showAll';
  navigation: StackNavigationProp<any, any>;
}

const ProductList = ({ navigation }: IProductList) => {
  const list = useFetchData('https://api.timeless.investments/assets');

  const renderItem = ({ item }: any) => (
    <ProductListItem
      item={item}
      onClick={() => navigation.navigate('Details', { itemId: item?.id })}
    />
  );

  const onEndReach = () => {};

  return (
    <View style={styles.root}>
      <FlatList
        data={list?.data?.assets}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
        maxToRenderPerBatch={4}
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd >= 0) {
            onEndReach();
          }
        }}
      />
    </View>
  );
};
export default ProductList;
