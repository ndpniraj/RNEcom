import {FC} from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import {DefaultTheme} from '@react-navigation/native';
import OTPField from './app/components/OTPField';

interface Props {}

const Theme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const App: FC<Props> = () => {
  return <AuthNavigator theme={Theme} />;
};

export default App;
