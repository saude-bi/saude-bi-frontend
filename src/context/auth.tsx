'use client';

import React, { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { LoadingOverlay } from '@mantine/core';
import { User } from '@/types/user';
import { logoutUser, useGetCurrentUserQuery } from '@/store/auth';
import { isPublicPage } from '@/middleware';
import { menuAdmin, menuMedicalWorker } from '@/utils/menu-role';
import { Menu } from '@/components/Drawer/DrawerMenu';

type Props = {
  children: React.ReactNode;
};

const AuthContext = React.createContext(
  {} as {
    currentUser: User | undefined;
    logout: (redirectLocation?: string) => void;
    menu: Menu[];
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string | undefined;
  }
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const { isLoading, isError, currentData: currentUser } = useGetCurrentUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = !!currentUser;
  const menu = !!currentUser && currentUser.isAdmin ? menuAdmin : menuMedicalWorker;

  const logout = (redirectLocation = '/auth/login') => {
    logoutUser();
    router.push(redirectLocation);
  };

  useEffect(() => {
    if (!isError) return;
    logout();
  }, [isError]);

  isPublicPage;

  useEffect(() => {
    // If it doesn't require auth, everything's good.
    if (isPublicPage(pathname)) return;

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
        menu,
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
  const pathname = usePathname();

  useEffect(() => {
    // Show loading if we're not authenticated and we're not on a public page
    if (!isPublicPage(pathname) && !isAuthenticated) return;

    setPageIsLoading(false);
  }, [isLoading]);

  if (isPageLoading) {
    return <LoadingOverlay visible={isPageLoading} />;
  }
  return children;
};
