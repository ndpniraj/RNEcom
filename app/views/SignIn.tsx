import {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';

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

        <PrimaryButton
          title="Log In"
          onPress={() => {
            console.log('');
          }}
        />
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
