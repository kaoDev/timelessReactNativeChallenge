import React from 'react';
import { View } from 'react-native';
import { BasicDetails } from '../../component';
import useFetchData from '../../hooks/useFetchData';

interface IProductDetails {
  navigation: any;
  route: any;
}

const ProductDetails = ({ route }: IProductDetails) => {
  const { itemId } = route.params;
  const itemData = useFetchData(
    `https://api.timeless.investments/assets/${itemId}`,
  );

  return (
    <View>
      <BasicDetails itemData={itemData?.data} />
    </View>
  );
};
export default ProductDetails;
