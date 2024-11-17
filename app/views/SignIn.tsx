import {FC} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FormInput from '../components/FormInput';

interface Props {}

const SignIn: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <FormInput
          label="Email"
          placeholder="email@example.com"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <FormInput
          label="Password"
          placeholder="*********"
          secureTextEntry
          autoCapitalize="none"
        />

        <Button title="Log In" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
});

export default SignIn;
