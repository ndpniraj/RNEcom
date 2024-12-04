import {FC, useEffect} from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import {DefaultTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from './app/navigation/TabNavigator';
import AuthProvider from './app/context/AuthProvider';
import AppNavigator from './app/navigation';
import {SafeAreaView} from 'react-native';

interface Props {}

const App: FC<Props> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
