import { Entity } from '@/types/common';
import { injectCreate, injectDelete, injectFindAll, injectFindById, injectUpdate } from './common';

const endpoint = 'category';

interface DashboardCategory extends Entity {}

export const { useFindDashboardCategoryQuery } = injectFindById<DashboardCategory>('findDashboardCategory', endpoint);

export const { useFindAllDashboardCategoriesQuery } = injectFindAll<DashboardCategory>(
  'findAllDashboardCategories',
  endpoint
);

export const { useCreateDashboardCategoryMutation } = injectCreate<DashboardCategory>('createDashboardCategory', endpoint);

export const { useUpdateDashboardCategoryMutation } = injectUpdate<DashboardCategory>('updateDashboardCategory', endpoint);

export const { useDeleteDashboardCategoryMutation } = injectDelete('deleteDashboardCategory', endpoint);
