import { Menu } from '@/components/Drawer/DrawerMenu';
import {
  IconBuildingHospital,
  IconBuildingWarehouse,
  IconCategory,
  IconCategory2,
  IconDashboard,
  IconDatabase,
  IconHome,
  IconSchool,
  IconServerCog,
  IconSourceCode,
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
    uri: 'javascript:void(0)',
    icon: IconUser,
    submenu: [
      {
        name: 'Profissionais',
        uri: '/admin/medical-worker',
        icon: IconUser,
      },
      {
        name: 'Ocupacação',
        uri: '/admin/occupation',
        icon: IconSchool,
      },
      {
        name: 'Categorias de Ocupacação',
        uri: '/admin/occupation-category',
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
        uri: '/admin/establishment',
        icon: IconBuildingHospital,
      },
      {
        name: 'Diretorias',
        uri: '/admin/directorship',
        icon: IconBuildingWarehouse,
      },
    ],
  },
  {
    name: 'Business Intelligence',
    uri: 'javascript:void(0)',
    icon: IconDatabase,
    submenu: [
      {
        name: 'Dashboards',
        uri: '/admin/dashboard',
        icon: IconDashboard,
      },
      {
        name: 'Categories de Dashboards',
        uri: '/admin/dashboard-category',
        icon: IconCategory,
      },
      {
        name: 'Fonte de Dados',
        uri: '/admin/data-source',
        icon: IconSourceCode,
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
