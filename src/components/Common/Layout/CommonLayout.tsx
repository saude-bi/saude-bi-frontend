import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex, LoadingOverlay } from '@mantine/core';
import { useGetCurrentUserQuery } from '@/store/auth';
import Header from '@/components/Header/Header';
import { Drawer } from '@/components/Drawer/Drawer';

interface Props {
  children: React.ReactNode;
}

export const CommonLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { isLoading, isError } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isError) {
      router.push('/auth/login');
    }
  }, [isError]);

  return (
    <Flex sx={{ minHeight: '100vh', minWidth: '100vw' }} bg="gray.2">
      {isLoading || isError ? (
        <LoadingOverlay visible />
      ) : (
        <Flex h="100%" w="100%">
          <Drawer />
          <Flex h="100%" w="84%">
            <Header />
            {children}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
