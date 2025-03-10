import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFavorite} from '../context/FavoriteProvider';

interface Props {}

const Fav: FC<Props> = () => {
  const favContext = useFavorite();
  return (
    <View style={styles.container}>
      <Text>Fav</Text>
      {favContext?.items.map(item => {
        return <Text key={item.id}>{item.title}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Fav;
