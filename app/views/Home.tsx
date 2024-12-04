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

type Props = StackScreenProps<AuthStackNavigator, 'Home'>;

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  poster: string;
  price: {
    mrp: number;
    sale: number;
  };
};

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
      // horizontal
      renderItem={({item: product}) => {
        return (
          <View>
            {/* <Image source={require('../source/img.png')} /> */}
            <Image
              source={{uri: product.poster}}
              style={{width: 300, height: 200}}
            />
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price.mrp}</Text>
            <Text>{product.price.sale}</Text>
          </View>
        );
      }}
      keyExtractor={product => product.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
