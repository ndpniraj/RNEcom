import {FC, useState} from 'react';
import FormInput from '../components/FormInput';
import FormContainer from '../components/FormContainer';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const SignIn: FC<Props> = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  return (
    <FormContainer
      onLinkPress={() => {
        navigation.navigate('SignUp');
      }}
      btnTitle="Sign In"
      navLinkTitle="Don't have an account?">
      <FormInput
        label="Email"
        placeholder="email@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={email => {
          setSignInInfo({...signInInfo, email});
        }}
      />
      <FormInput
        label="Password"
        placeholder="*********"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={password => {
          setSignInInfo({...signInInfo, password});
        }}
      />
    </FormContainer>
  );
};

export default SignIn;
