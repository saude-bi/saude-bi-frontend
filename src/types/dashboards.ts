import { Entity } from '@/types/common';
import { Establishment } from './establishment';
import { DashboardCategory } from './dashboard-category';
import { DataSource } from './data-source';

export interface Dashboard extends Entity {
  establishmentsWithAccess: Establishment[];
  dataSource: DataSource;
  category: DashboardCategory;
  metabaseId: number;
  name: string;
  establishmentPropertyName: string;
}

export interface FindDashboardUrlDto extends Entity {
  url: string;
}

export type CreateDashboardDto = {
  establishmentsWithAccess: number[];
  dataSource: number;
  category: number;
  metabaseId: number;
  name: string;
  establishmentPropertyName: string;
};

export type UpdateDashboardDto = Partial<CreateDashboardDto>;
