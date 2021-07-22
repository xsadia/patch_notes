import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from '../services/api';
import Router from 'next/router';
import { setCookie, parseCookies, destroyCookie } from "nookies";

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  username: string;
  role: string;
  _id: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated: boolean;
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'patchnotes.token': token } = parseCookies();

    if (token) {
      api.get('users/me').then(response => {
        const { username, role, _id } = response.data;
        setUser({ username, role, _id });
      }).catch(() => {
        signOut();
      });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password
      });

      console.log(response.data);

      const { token, user } = response.data;
      const { username, role, _id } = user;

      setCookie(undefined, 'patchnotes.token', token, {
        //maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });

      setUser({
        username,
        role,
        _id
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push('/posts');
    } catch (err) {
      console.log(err);
    }
  }

  function signOut() {
    destroyCookie(undefined, 'patchnotes.token');
    setUser(null);
    Router.push('/');
  }


  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut }} >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};