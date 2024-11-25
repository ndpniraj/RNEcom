import {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FormContainer from '../components/FormContainer';
import FormInput from '../components/FormInput';

interface Props {}

const SignUp: FC<Props> = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <FormContainer btnTitle="Sign Up" navLinkTitle="I already have an account?">
      <FormInput
        label="Name"
        placeholder="John Doe"
        onChangeText={name => {
          setSignUpInfo({...signUpInfo, name});
        }}
      />
      <FormInput
        label="Email"
        placeholder="email@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={email => {
          setSignUpInfo({...signUpInfo, email});
        }}
      />
      <FormInput
        label="Password"
        placeholder="*********"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={password => {
          setSignUpInfo({...signUpInfo, password});
        }}
      />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignUp;
