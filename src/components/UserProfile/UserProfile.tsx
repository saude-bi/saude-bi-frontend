import React from 'react';
import { Stack, Title, Text, Group, ActionIcon } from '@mantine/core';
import { User } from '@/types/user';
import { IconUser } from '@tabler/icons-react';

type Props = {
  user: User;
};

export const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <Group spacing="lg">
      <ActionIcon color="orange.3" variant="filled" size="xl" radius="md">
        <IconUser size="32px" />
      </ActionIcon>

      <Stack spacing={0}>
        <Title color="black" weight="bold" size="md">
          {user.username}
        </Title>
        <Text color="dark.3" size="xs">
          {user.username}
        </Text>
      </Stack>
    </Group>
  );
};
