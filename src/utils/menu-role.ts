import { Menu } from '@/components/Drawer/DrawerMenu';
import { IconDatabase, IconHome, IconUser } from '@tabler/icons-react';

export const menuAdmin: Menu[] = [
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

export const menuMedicalWorker: Menu[] = [
  {
    name: 'Home',
    uri: '/',
    icon: IconHome,
  },
];
