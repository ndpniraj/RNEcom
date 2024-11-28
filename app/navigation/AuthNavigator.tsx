import {createStaticNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import OTPField from '../components/OTPField';

export type AuthStackNavigator = {
  SignIn: undefined;
  SignUp: undefined;
  OTPField: undefined;
};

const AuthStack = createStackNavigator<AuthStackNavigator>({
  screens: {
    SignIn,
    SignUp,
    OTPField,
  },
  screenOptions: {
    headerShown: false,
  },
});

const AuthNavigator = createStaticNavigation(AuthStack);

export default AuthNavigator;
