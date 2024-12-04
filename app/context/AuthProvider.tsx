import AsyncStorage from '@react-native-async-storage/async-storage';
import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {createContext} from 'react';
import client from '../api/client';
import {Text, View} from 'react-native';

// Context

type Profile = {name: string; email: string};

interface DefaultAuthContext {
  isAuth: boolean;
  profile: Profile | null;
}

export const AuthContext = createContext<DefaultAuthContext>({
  isAuth: false,
  profile: null,
});

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({children}) => {
  const [busy, setBusy] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [profile, setProfile] = useState<DefaultAuthContext['profile']>(null);

  useEffect(() => {
    const readTokenFromAsyncStorage = async () => {
      const result = await AsyncStorage.getItem('auth_token');
      if (result) {
        const {data} = await client.get('/auth/is-auth', {
          headers: {
            Authorization: 'Bearer ' + result,
          },
        });
        setIsAuth(true);
        setProfile(data.profile);
      }
    };

    readTokenFromAsyncStorage().finally(() => {
      setBusy(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, profile}}>
      {busy ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Fetching Auth Info...</Text>
        </View>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
