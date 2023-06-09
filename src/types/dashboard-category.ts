import { Entity } from '@/types/common';

export interface DashboardCategory extends Entity {
  name: string;
}

export type CreateDashboardCategoryDto = {
  name: string;
};

export type UpdateDashboardCategoryDto = Partial<CreateDashboardCategoryDto>;
