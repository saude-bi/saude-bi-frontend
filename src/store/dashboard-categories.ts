import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from './common';
import { DashboardCategory } from '@/types/dashboard-category';

const endpoint = 'category';

export const { useFindDashboardCategoryQuery } = injectFindById<DashboardCategory>(
  'findDashboardCategory',
  endpoint
);

export const { useFindAllDashboardCategoriesQuery } = injectFindAll<DashboardCategory>(
  'findAllDashboardCategories',
  endpoint
);

export const { useCreateDashboardCategoryMutation } = injectCreate<DashboardCategory>(
  'createDashboardCategory',
  endpoint
);

export const { useUpdateDashboardCategoryMutation } = injectUpdate<DashboardCategory>(
  'updateDashboardCategory',
  endpoint
);

export const { useRemoveDashboardCategoryMutation } = injectRemove(
  'removeDashboardCategory',
  endpoint
);
