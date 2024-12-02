import AsyncStorage from '@react-native-async-storage/async-storage';
import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {createContext} from 'react';

// Context

interface DefaultAuthContext {
  isAuth: boolean;
}

export const AuthContext = createContext<DefaultAuthContext>({
  isAuth: false,
});

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const readTokenFromAsyncStorage = async () => {
      const result = await AsyncStorage.getItem('auth_token');
      if (result) setIsAuth(true);
    };

    readTokenFromAsyncStorage();
  }, []);

  return (
    <AuthContext.Provider value={{isAuth}}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
