import {FC, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import client from '../api/client';
import {HomeNavigatorProps} from '../navigation/HomeNavigator';

type Props = StackScreenProps<HomeNavigatorProps, 'SingleProduct'>;

const SingleProduct: FC<Props> = ({route}) => {
  const productId = route.params.id;
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const {data} = await client.get('/product/detail/' + productId);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <View style={styles.container}>
      <Text>Single Product</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SingleProduct;
