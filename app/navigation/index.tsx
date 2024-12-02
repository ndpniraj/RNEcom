import {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthContext, useAuth} from '../context/AuthProvider';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

interface Props {}

const AppNavigator: FC<Props> = () => {
  const authContext = useAuth();

  return authContext.isAuth ? <TabNavigator /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
