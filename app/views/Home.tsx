import {FC, useEffect, useState} from 'react';
import {StyleSheet, FlatList, Pressable, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackNavigator} from '../navigation/AuthNavigator';
import {useAuth} from '../context/AuthProvider';
import client from '../api/client';
import ProductCard, {offset, Product} from '../components/ProductCard';
import CategoryList from '../components/CategoryList';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>;

const Home: FC<Props> = ({route}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

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

    const fetchCategories = async () => {
      try {
        const {data} = await client.get<{categories: string[]}>(
          '/product/categories',
        );
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <>
      <CategoryList
        data={categories}
        renderItem={({item}) => {
          return <Text>{item}</Text>;
        }}
      />
      <FlatList
        data={products}
        contentContainerStyle={styles.container}
        // horizontal
        renderItem={({item: product}) => {
          return <ProductCard product={product} />;
        }}
        keyExtractor={product => product.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: offset,
    gap: 20,
  },
});

export default Home;
