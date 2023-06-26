'use client';

import React, { useState } from 'react';
import { Stack, Text, Group, Menu, UnstyledButton, Avatar, createStyles, rem } from '@mantine/core';
import { User } from '@/types/user';
import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { logoutUser, switchWorkRelation } from '@/store/auth';
import { useRouter } from 'next/navigation';

type Props = {
  user: User;
};

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}));

export const UserProfile: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const handleLogout = () => {
    logoutUser();
    router.push('/auth/login');
  };

  const handleSwitchProfile = () => {
    switchWorkRelation();
    router.push('/switch-work');
  };

  return (
    <Group spacing="lg">
      <Menu
        width={260}
        shadow="md"
        position="bottom-end"
        transitionProps={{ transition: 'pop-top-right' }}
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
            <Group spacing="lg">
              <Avatar alt={user.username} color="orange.3" variant="filled" size={44} radius="md">
                <IconUser color="white" size={32} />
              </Avatar>
              <Stack spacing={0}>
                <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                  {user.username}
                </Text>
                <Text color="dark.3" size="xs">
                  {user.username}
                </Text>
              </Stack>
              <IconChevronDown size={rem(12)} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Configurações</Menu.Label>
          <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
            Configurações da Conta
          </Menu.Item>
          <Menu.Item
            onClick={handleSwitchProfile}
            icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}
          >
            Trocar Perfil de Acesso
          </Menu.Item>
          <Menu.Item onClick={handleLogout} icon={<IconLogout size="0.9rem" stroke={1.5} />}>
            Sair
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};
