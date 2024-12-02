import {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthContext} from '../context/AuthProvider';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

interface Props {}

const AppNavigator: FC<Props> = () => {
  const authContext = useContext(AuthContext);

  return authContext.isAuth ? <TabNavigator /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
