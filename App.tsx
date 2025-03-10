import {FC} from 'react';
import AppNavigator from './app/navigation';
import {SafeAreaView} from 'react-native';
import Providers from './app/context/Providers';

interface Props {}

const App: FC<Props> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Providers>
        <AppNavigator />
      </Providers>
    </SafeAreaView>
  );
};

export default App;
