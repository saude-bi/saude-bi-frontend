import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from './common';
import { CreateDashboardCategoryDto, DashboardCategory, UpdateDashboardCategoryDto } from '@/types/dashboard-category';

const endpoint = 'category';

export const { useFindDashboardCategoryQuery } = injectFindById<DashboardCategory>(
  'findDashboardCategory',
  endpoint
);

export const { useFindAllDashboardCategoriesQuery } = injectFindAll<DashboardCategory>(
  'findAllDashboardCategories',
  endpoint
);

export const { useCreateDashboardCategoryMutation } = injectCreate<DashboardCategory, CreateDashboardCategoryDto>(
  'createDashboardCategory',
  endpoint
);

export const { useUpdateDashboardCategoryMutation } = injectUpdate<DashboardCategory, UpdateDashboardCategoryDto>(
  'updateDashboardCategory',
  endpoint
);

export const { useRemoveDashboardCategoryMutation } = injectRemove(
  'removeDashboardCategory',
  endpoint
);
