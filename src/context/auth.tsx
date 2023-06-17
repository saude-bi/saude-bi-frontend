import React, { Children, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '@/types/user';
import { logoutUser, useGetCurrentUserQuery } from '@/store/auth';
import { CookieValueTypes, getCookie } from 'cookies-next';
import { isPublicPage } from '@/middleware';
import { LoadingOverlay } from '@mantine/core';

type Props = {
  children: React.ReactNode;
};

const AuthContext = React.createContext(
  {} as {
    currentUser: User | undefined;
    logout: (redirectLocation?: string) => void;
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string | undefined;
  }
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const { isLoading, isError, currentData: currentUser } = useGetCurrentUserQuery();
  const router = useRouter();
  const isAuthenticated = !!currentUser;

  const logout = (redirectLocation = '/auth/login') => {
    logoutUser();
    console.log('Redirecting');
    router.push(redirectLocation);
  };

  useEffect(() => {
    if (!isError) return;
    logout();
  }, [isError]);

  isPublicPage;

  useEffect(() => {
    // If it doesn't require auth, everything's good.
    if (isPublicPage(router.pathname)) return;

    // If we're already authenticated, everything's good.
    if (isAuthenticated) return;

    // If we don't have a token in the cookies, logout
    const token = getCookie('token');
    if (!token) {
      return logout('/auth/unauthorized');
    }
  }, [isLoading, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        logout,
        isLoading,
        isAuthenticated: !!currentUser,
        token: getCookie('token')?.toString(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }: any) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [isPageLoading, setPageIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log('tentando carregar');
    // Show loading while page is not ready
    if (!router.isReady) return;

    // Show loading if we're not authenticated and we're not on a public page
    if (!isPublicPage(router.pathname) && !isAuthenticated) return;

    setPageIsLoading(false);
  }, [router, isLoading]);

  if (isLoading) {
    return <LoadingOverlay visible={isPageLoading} />;
  }
  return children;
};
