import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Flex, LoadingOverlay, Stack } from '@mantine/core';
import { useGetCurrentUserQuery } from '@/store/auth';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Drawer, Menu } from '@/components/Drawer/Drawer';
import { UserProfile } from '@/components/Common/Buttons/UserProfile';
import { ScrollUp } from '@/components/Common/Buttons/ScrollUp';
import {
  BaseNotificationProps,
  ShowStateNotification,
} from '@/components/Common/Feedback/Notifications';
import { IconDatabase, IconHome, IconUser } from '@tabler/icons-react';

type Props = {
  children: React.ReactNode;
  title: string;
};

const menu: Menu[] = [
  {
    name: 'Home',
    uri: '/',
    icon: IconHome,
  },
  {
    name: 'Usuários',
    uri: '/',
    icon: IconUser,
    submenu: [
      {
        name: 'Profissionais',
        uri: '/medical-worker',
        icon: IconUser,
      },
      {
        name: 'Ocupacação',
        uri: '/occupation',
        icon: IconUser,
      },
      {
        name: 'Categorias de Ocupacação',
        uri: '/occupation-category',
        icon: IconUser,
      },
    ],
  },
  {
    name: 'Business Intelligence',
    uri: '/',
    icon: IconDatabase,
    submenu: [
      {
        name: 'Categories de Dashboards',
        uri: '/dashboard-category',
        icon: IconUser,
      },
    ],
  },
];

export const CommonLayout: React.FC<Props> = ({ children, title }) => {
  const router = useRouter();
  const { isLoading, isError, currentData: currentUser } = useGetCurrentUserQuery();

  useEffect(() => {
    if (router.query.type !== undefined) {
      ShowStateNotification({ ...router.query } as BaseNotificationProps);
    }
  }, [router.query]);

  useEffect(() => {
    if (isError) {
      router.push('/auth/login');
    }
  }, [isError]);

  return (
    <Box bg="gray.2">
      {isLoading || isError ? (
        <LoadingOverlay visible />
      ) : (
        <Flex sx={{ minHeight: '100vh', minWidth: '100vw' }}>
          <Center p="xl">
            <Drawer menu={menu} />
          </Center>
          <Stack sx={{ flexGrow: 1 }} px="xl" py="md">
            <Flex align="center" justify="space-between">
              <PageTitle title={title} />
              <UserProfile user={currentUser!} />
            </Flex>
            {children}
          </Stack>
        </Flex>
      )}
      <ScrollUp />
    </Box>
  );
};
