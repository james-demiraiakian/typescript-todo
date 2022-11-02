import { createContext, useState } from 'react';

export const authContext: React.Context<any> = createContext({});

export function ProvideAuth({ children }: any) {
  const [user, setUser] = useState<object | null>(null);

  const login = (email: string, password: string) => {
    const loginSuccessful: boolean =
      email === process.env.EMAIL && password === process.env.PASSWORD;
    if (loginSuccessful) setUser({ email });
    return loginSuccessful;
  };

  const logout = (callback: any) => {
    setUser(null);
    callback();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
