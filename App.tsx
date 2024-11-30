import {FC, useEffect} from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import {DefaultTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {}

const Theme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const App: FC<Props> = () => {
  useEffect(() => {
    const readTokenFromAsyncStorage = async () => {
      const result = await AsyncStorage.getItem('auth_token');
      console.log(result);
    };

    readTokenFromAsyncStorage();
  }, []);

  return <AuthNavigator theme={Theme} />;
};

export default App;
