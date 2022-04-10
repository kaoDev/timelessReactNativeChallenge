import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { ProductListItem } from '../../component';
import { styles } from './styles';

interface IProductList {
  type: 'availableSoon' | 'soldOut' | 'showAll';
  navigation: StackNavigationProp<any, any>;
}

const ProductList = ({ navigation }: IProductList) => {
  const itemData = { title: 'product details 1' };
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => navigation.navigate('Details', { itemData })}>
      <ProductListItem item={itemData} />
    </TouchableOpacity>
  );
};
export default ProductList;
