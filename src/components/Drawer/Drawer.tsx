import React from 'react';
import { useRouter } from 'next/router';
import { logout } from '@/store/auth';
import { ActionIcon, Stack, Title } from '@mantine/core';
import { IconDatabase, IconHome, IconUser } from '@tabler/icons-react';
import { ContentCard } from '../Common/ContentCard/ContentCard';

export const Drawer: React.FC = () => {
  const router = useRouter();

  return (
    <ContentCard bg="indigo.4" h="100%">
      <Stack h="100%">
        <Title color="white">SBI</Title>
        <Stack sx={{ flexGrow: 1 }} align="center" justify="center" spacing="xl">
          <ActionIcon onClick={() => router.push('/')} size="lg">
            <IconHome size="lg" />
          </ActionIcon>

          <ActionIcon size="lg">
            <IconUser size="lg" />
          </ActionIcon>

          <ActionIcon
            onClick={() => {
              logout();
              router.push('/auth/login');
            }}
            size="lg"
          >
            <IconDatabase size="lg" />
          </ActionIcon>
        </Stack>
      </Stack>
    </ContentCard>
  );
};
