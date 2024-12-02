import {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackNavigator} from '../navigation/AuthNavigator';
import {AuthContext} from '../context/AuthProvider';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>;

const Home: FC<Props> = ({route}) => {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Text>Profile {name}</Text>
      <Text>Profile {email}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
