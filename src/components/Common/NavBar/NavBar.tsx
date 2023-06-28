'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Flex } from '@mantine/core';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { UserProfile } from '@/components/Common/Buttons/UserProfile';
import { User } from '@/types/user';
import { isPublicPage } from '@/middleware';
import { useAuth } from '@/context/auth';

type Props = {
  title: string;
};

export const NavBar: React.FC<Props> = ({ title }) => {
  const router = useRouter();
  const { isAuthenticated, currentUser, isLoading } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isPublicPage(pathname)) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading]);

  return (
    <Flex align="center" justify="space-between">
        <PageTitle title={title} />
        <UserProfile user={!!currentUser ? currentUser : {} as User} />
    </Flex>
  );
};
