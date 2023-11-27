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
  IconBuildingCommunity,
  IconMap,
  IconMap2,
} from '@tabler/icons-react';
import { Menu } from '@/components/Drawer/DrawerMenu';

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
    icon: IconBuildingCommunity,
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
  {
    name: 'Mapas',
    uri: 'javascript.void(0)',
    icon: IconMap,
    submenu: [
      {
        name: 'Camadas',
        uri: '/admin/geo-layer',
        icon: IconMap2,
      },
      {
        name: 'Fonte de Dados',
        uri: '/admin/geo-data-source',
        icon: IconSourceCode,
      },
      {
        name: 'Cadastro Mapas',
        uri: '/admin/geo-maps',
        icon: IconMap,
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
