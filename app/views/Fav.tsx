import {FC} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useFavorite} from '../context/FavoriteProvider';
import {formatPrice} from '../utils/helper';

interface Props {}

const Fav: FC<Props> = () => {
  const favContext = useFavorite();
  return (
    <View style={styles.container}>
      {
        <FlatList
          numColumns={2}
          // contentContainerStyle={{gap: 10}}
          data={favContext?.items}
          renderItem={({item}) => {
            return (
              <View style={styles.productContainer}>
                <Image source={{uri: item.poster}} style={styles.image} />
                <Text numberOfLines={1} style={styles.title}>
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={styles.price}>
                  {formatPrice(item.price.sale)}
                </Text>
              </View>
            );
          }}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {width: '100%', height: 150, borderRadius: 8},
  title: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  productContainer: {flex: 1, padding: 5},
});

export default Fav;
