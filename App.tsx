import {FC} from 'react';
import SignIn from './app/views/SignIn';
import SignUp from './app/views/SignUp';
import {createStackNavigator} from '@react-navigation/stack';
import {createStaticNavigation} from '@react-navigation/native';

interface Props {}

export type AuthStackNavigator = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackNavigator>({
  screens: {
    SignIn,
    SignUp,
  },
});

const Navigation = createStaticNavigation(AuthStack);

const App: FC<Props> = () => {
  return <Navigation />;
};

export default App;
