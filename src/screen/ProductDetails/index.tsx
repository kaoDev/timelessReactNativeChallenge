import React from 'react';
import { View } from 'react-native';
import { BasicDetails } from '../../component';

interface IProductDetails {
  navigation: any;
  route: any;
}

const ProductDetails = ({ route }: IProductDetails) => {
  const { itemData } = route.params;
  return (
    <View>
      <BasicDetails item={itemData} />
    </View>
  );
};
export default ProductDetails;
