import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Flex, LoadingOverlay, Stack } from '@mantine/core';
import { useGetCurrentUserQuery } from '@/store/auth';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Drawer } from '@/components/Drawer/Drawer';
import { UserProfile } from '@/components/UserProfile/UserProfile';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const CommonLayout: React.FC<Props> = ({ children, title }) => {
  const router = useRouter();
  const { isLoading, isError, data: currentUser } = useGetCurrentUserQuery();

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
            <Drawer />
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
    </Box>
  );
};
