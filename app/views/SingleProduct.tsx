import {FC, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import client from '../api/client';
import {HomeNavigatorProps} from '../navigation/HomeNavigator';

type Props = StackScreenProps<HomeNavigatorProps, 'SingleProduct'>;

type ProductDetail = {
  id: number;
  title: string;
  description: string;
  category: string;
  poster: string;
  price: {
    mrp: number;
    sale: number;
  };
  images: string[];
  bulletPoints: string[];
};

const {width} = Dimensions.get('screen');
const padding = 10;
const imageSize = width - 10 * 2;
const SingleProduct: FC<Props> = ({route}) => {
  const productId = route.params.id;
  const [product, setProduct] = useState<ProductDetail>();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    (info: {
      viewableItems: ViewToken<string>[];
      changed: ViewToken<string>[];
    }) => {
      const activeIndex = info.viewableItems[0]?.index;
      if (activeIndex !== undefined && activeIndex !== null)
        setCurrentSlideIndex(activeIndex);
    },
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const {data} = await client.get<{product: ProductDetail | null}>(
          '/product/detail/' + productId,
        );
        if (data.product) {
          setProduct(data.product);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product)
    return (
      <View style={styles.container}>
        <Text>No Product Detail Found!</Text>
      </View>
    );

  const images = [product.poster, ...product.images];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <FlatList
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({item}) => {
            return (
              <Image
                source={{uri: item}}
                style={{width: imageSize, height: imageSize, borderRadius: 8}}
                resizeMode="cover"
              />
            );
          }}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig.current}
        />

        <View style={styles.images}>
          {images.map((item, index) => {
            return (
              <Image
                key={item + index}
                source={{uri: item}}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  transform: [{scale: index === currentSlideIndex ? 1 : 0.5}],
                }}
                resizeMode="cover"
              />
            );
          })}
        </View>
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.text}>{product.description}</Text>
      <View style={styles.bulletPoints}>
        <Text style={styles.keyTitle}>Key Features</Text>

        {product.bulletPoints.map(point => {
          return (
            <Text style={styles.text} key={point}>
              {point}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding,
    gap: 20,
  },
  images: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  bulletPoints: {
    gap: 10,
  },
  keyTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
  },
});

export default SingleProduct;
