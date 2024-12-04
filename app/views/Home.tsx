import {FC, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackNavigator} from '../navigation/AuthNavigator';
import {useAuth} from '../context/AuthProvider';
import client from '../api/client';
import ProductCard, {offset, Product} from '../components/ProductCard';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>;

const Home: FC<Props> = ({route}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await client.get<{products: Product[]}>(
          '/product/products',
        );
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <FlatList
      data={products}
      contentContainerStyle={styles.container}
      // horizontal
      renderItem={({item: product}) => {
        return <ProductCard product={product} />;
      }}
      keyExtractor={product => product.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: offset,
    gap: 20,
  },
});

export default Home;
