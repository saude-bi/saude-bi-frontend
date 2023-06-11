import React from 'react';
import { useRouter } from 'next/router';
import { Stack, Title } from '@mantine/core';
import { ContentCard } from '../Common/ContentCard/ContentCard';
import { DrawerMenu, Menu, MenuItem } from '@/components/Drawer/DrawerMenu';

type Props = {
  menu: Menu[];
};

export const Drawer: React.FC<Props> = ({ menu }) => {
  const router = useRouter();

  return (
    <ContentCard bg="indigo.4" h="100%">
      <Stack h="100%">
        <Title color="white">SBI</Title>
        <Stack sx={{ flexGrow: 1 }} align="center" justify="center" spacing="xl">
          {menu.map((item) => (
            <DrawerMenu menu={item} key={item.name} />
          ))}
        </Stack>
      </Stack>
    </ContentCard>
  );
};
