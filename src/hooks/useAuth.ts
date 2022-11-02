import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';

export function useAuth(): object {
  const context: object | undefined = useContext<object | undefined>(
    authContext
  );

  if (context === undefined) {
    throw new Error('useAuth must be used within ProvideAuth context');
  }

  return context;
}
