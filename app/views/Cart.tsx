import {FC, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCart} from '../context/CartProvider';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const Cart: FC<Props> = () => {
  const cartContext = useCart();
  const cartItemsCount = cartContext?.countAllItems();

  const navigation = useNavigation();

  useEffect(() => {
    let tabBarBadge = '';
    if (cartItemsCount)
      tabBarBadge = cartItemsCount <= 9 ? cartItemsCount.toString() : '9+';
    navigation.setOptions({
      tabBarBadge,
    });
  }, [navigation, cartItemsCount]);

  return (
    <View style={styles.container}>
      <Text>Cart {cartItemsCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Cart;
