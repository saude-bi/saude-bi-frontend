import { NextRouter } from 'next/router';
import { removeAuthToken } from './useAuthToken';

export default function useLogout(router: NextRouter) {
  const logout = () => {
    removeAuthToken();
    router.push('/auth/login');
  };

  return { logout };
}
