'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Box, Center, Flex, LoadingOverlay, Stack } from '@mantine/core';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Drawer } from '@/components/Drawer/Drawer';
import { UserProfile } from '@/components/Common/Buttons/UserProfile';
import { ScrollUp } from '@/components/Common/Buttons/ScrollUp';
import {
  BaseNotificationProps,
  ShowStateNotification,
} from '@/components/Common/Feedback/Notifications';
import { User } from '@/types/user';
import { isPublicPage } from '@/middleware';
import { useAuth } from '@/context/auth';

type Props = {
  children: React.ReactNode;
};

export const CommonLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, menu, isLoading } = useAuth();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get('type') !== null) {
      ShowStateNotification({ ...searchParams.getAll } as BaseNotificationProps);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isPublicPage(pathname)) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading]);

  return (
    <Box bg="gray.2">
      {isLoading ? (
        <LoadingOverlay visible />
      ) : (
        <Flex sx={{ minHeight: '100vh', minWidth: '100vw' }}>
          <Center p="xl">
            <Drawer menu={menu} />
          </Center>
          <Stack sx={{ flexGrow: 1 }} px="xl" py="md">
            {children}
          </Stack>
        </Flex>
      )}
      <ScrollUp />
    </Box>
  );
};
