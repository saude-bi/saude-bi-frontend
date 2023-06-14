import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Flex, LoadingOverlay, Stack } from '@mantine/core';
import { useGetCurrentUserQuery } from '@/store/auth';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Drawer } from '@/components/Drawer/Drawer';
import { UserProfile } from '@/components/Common/Buttons/UserProfile';
import { ScrollUp } from '@/components/Common/Buttons/ScrollUp';
import {
  BaseNotificationProps,
  ShowStateNotification,
} from '@/components/Common/Feedback/Notifications';
import { Menu } from '@/components/Drawer/DrawerMenu';
import { menuAdmin, menuMedicalWorker } from '@/utils/menu-role';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { User } from '@/types/user';

type AuthRequest = {
  currentUser: User;
};

type Repo = {
  name: string
  stargazers_count: number
  menu: Menu[]
}

export const getServerSideProps: GetServerSideProps<{
  repo?: Repo,
  menu: Menu[]
}> = async () => {
  console.log('teste');
  const { isLoading, isError, currentData: currentUser } = useGetCurrentUserQuery();
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  let menu: Menu[] = [];
  if (!!currentUser && currentUser.isAdmin) {
    menu = menuAdmin;
  } else {
    menu = menuMedicalWorker;
  }
  if (isError) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return { props: { repo, menu } }
}

type Props = {
  children: React.ReactNode;
  title: string;
  serverProps: InferGetServerSidePropsType<typeof getServerSideProps>;
};

export const CommonLayout: React.FC<Props> = ({ children, title, ...props }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.type !== undefined) {
      ShowStateNotification({ ...router.query } as BaseNotificationProps);
    }
  }, [router.query]);

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <Box bg="gray.2">
      <Flex sx={{ minHeight: '100vh', minWidth: '100vw' }}>
        <Center p="xl">
          <Drawer menu={props.menu} />
        </Center>
        <Stack sx={{ flexGrow: 1 }} px="xl" py="md">
          <Flex align="center" justify="space-between">
            <PageTitle title={title} />
            
          </Flex>
          {children}
        </Stack>
      </Flex>
      <ScrollUp />
    </Box>
  );
};
