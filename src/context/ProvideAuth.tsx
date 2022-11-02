import { createContext, useState } from 'react';

export const authContext: React.Context<undefined | object> = createContext<
  undefined | object
>(undefined);

export function ProvideAuth({ children }: any) {
  const [user, setUser] = useState<object | null>(null);

  const login = (email: string, password: string): boolean => {
    const loginSuccessful: boolean =
      email === process.env.EMAIL && password === process.env.PASSWORD;
    if (loginSuccessful) setUser({ email });
    return loginSuccessful;
  };

  const logout = (callback: any): void => {
    setUser(null);
    callback();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
