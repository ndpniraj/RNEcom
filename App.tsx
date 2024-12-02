import {FC, useEffect} from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import {DefaultTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from './app/navigation/TabNavigator';
import AuthProvider from './app/context/AuthProvider';
import AppNavigator from './app/navigation';

interface Props {}

const Theme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const App: FC<Props> = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
