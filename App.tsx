import {FC, useEffect} from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import {DefaultTheme} from '@react-navigation/native';
import axios from 'axios';

interface Props {}

const Theme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};
const url = 'http://192.168.29.217:5555/';
const App: FC<Props> = () => {
  useEffect(() => {
    axios(url).then(res => {
      console.log(res.data);
    });
    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then(async result => {
    //   if (!result.ok) {
    //     // we got error response
    //     const errorRes = await result.json();
    //     console.error(errorRes);
    //   } else {
    //     // we got success response
    //     const res = await result.json();
    //     console.log(res);
    //   }
    // });
  }, []);
  return <AuthNavigator theme={Theme} />;
};

export default App;
