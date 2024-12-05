import {FC} from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Pressable,
} from 'react-native';

export type Product = {
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

interface Props {
  product: Product;
  onPress?(): void;
}

// 1280 * 720 16:9
// 720 * 1280 9:16

const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
};

export const offset = 10;
const {width} = Dimensions.get('screen');
const ProductCard: FC<Props> = ({product, onPress}) => {
  const imageWidth = width - offset * 4;
  const imageHeight = (imageWidth * 9) / 16;

  const imageStyle = {width: imageWidth, height: imageHeight};

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{uri: product.poster}}
        style={[imageStyle, styles.image]}
      />
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price: </Text>
        <Text style={styles.mrp}>{formatPrice(product.price.mrp)}</Text>
        <Text style={styles.salePrice}>{formatPrice(product.price.sale)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#dedede',
    padding: offset,
    borderRadius: 8,
    gap: 5,
  },
  image: {
    borderRadius: 8,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  priceTitle: {
    fontSize: 20,
  },
  mrp: {
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
    fontSize: 20,
  },
  salePrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductCard;
