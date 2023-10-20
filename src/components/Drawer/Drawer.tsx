'use client';

import React from 'react';
import { Stack, Title } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { ContentCard } from '../Common/ContentCard/ContentCard';
import { DrawerMenu, Menu } from '@/components/Drawer/DrawerMenu';

type Props = {
  menu: Menu[];
};

export const Drawer: React.FC<Props> = ({ menu }) => {
  const [active, setActive] = React.useState<string>('');
  const pathname = usePathname();

  React.useEffect(() => {
    let pathAdminFound = false;
    menu?.forEach((item) => {
      item?.submenu?.forEach((subitem) => {
        if (pathname.includes(subitem.uri)) {
          pathAdminFound = true;
          setActive(item.name);
        }
      });
    });
    if (!pathAdminFound) {
      setActive('Home');
    }
  }, [pathname]);

  return (
    <ContentCard bg="indigo.4" h="100%">
      <Stack h="100%">
        <Title color="white">SBI</Title>
        <Stack sx={{ flexGrow: 1 }} align="center" justify="center" spacing="xl">
          {menu.map((item) => (
            <DrawerMenu menu={item} key={item.name} active={active} />
          ))}
        </Stack>
      </Stack>
    </ContentCard>
  );
};
