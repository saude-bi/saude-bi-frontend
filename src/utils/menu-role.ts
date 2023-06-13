import { Menu } from '@/components/Drawer/DrawerMenu';
import {
  IconBuildingHospital,
  IconCategory,
  IconCategory2,
  IconDatabase,
  IconHome,
  IconSchool,
  IconServerCog,
  IconUser,
} from '@tabler/icons-react';

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
        icon: IconSchool,
      },
      {
        name: 'Categorias de Ocupacação',
        uri: '/occupation-category',
        icon: IconCategory2,
      },
    ],
  },
  {
    name: 'Gestão de Locais',
    uri: '/',
    icon: IconServerCog,
    submenu: [
      {
        name: 'Estabelecimentos',
        uri: '/establishment',
        icon: IconBuildingHospital,
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
        icon: IconCategory,
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
