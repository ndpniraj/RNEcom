import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const SingleProduct: FC<Props> = () => {
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
