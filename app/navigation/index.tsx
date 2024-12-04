import {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthContext, useAuth} from '../context/AuthProvider';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import {DefaultTheme} from '@react-navigation/native';

interface Props {}

const Theme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const AppNavigator: FC<Props> = () => {
  const authContext = useAuth();

  return authContext.isAuth ? (
    <TabNavigator theme={Theme} />
  ) : (
    <AuthNavigator theme={Theme} />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
