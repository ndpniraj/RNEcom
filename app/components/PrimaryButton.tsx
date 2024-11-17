import {FC} from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';

interface Props {
  title?: string;
  onPress?(): void;
}

const PrimaryButton: FC<Props> = ({title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...styles.container,
        opacity: pressed ? 0.5 : 1,
      })}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFA500',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});

export default PrimaryButton;
