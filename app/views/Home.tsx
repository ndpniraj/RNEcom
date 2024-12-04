import {FC, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackNavigator} from '../navigation/AuthNavigator';
import {useAuth} from '../context/AuthProvider';
import client from '../api/client';
import ProductCard, {offset, Product} from '../components/ProductCard';

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
          '/product/categories/',
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
    <View style={styles.wrapper}>
      <FlatList
        style={styles.categoryFlatList}
        contentContainerStyle={styles.categoryContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => {
          return (
            <Pressable style={styles.categoryBtn}>
              <Text>{item}</Text>
            </Pressable>
          );
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: offset,
    gap: 20,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    gap: 10,
  },
  categoryFlatList: {
    paddingVertical: 20,
  },
  categoryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#dedede',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Home;
