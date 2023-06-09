import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from './common';
import {
  OccupationCategory,
  CreateOccupationCategoryDto,
  UpdateOccupationCategoryDto,
} from '@/types/occupation-category';
const endpoint = 'occupation-categories';

export const { useFindOccupationCategoryQuery } = injectFindById<OccupationCategory>(
  'findOccupationCategory',
  endpoint
);

export const { useFindAllOccupationCategoriesQuery } = injectFindAll<OccupationCategory>(
  'findAllOccupationCategories',
  endpoint
);

export const { useCreateOccupationCategoryMutation } = injectCreate<
  OccupationCategory,
  CreateOccupationCategoryDto
>('createOccupationCategory', endpoint);

export const { useUpdateOccupationCategoryMutation } = injectUpdate<
  OccupationCategory,
  UpdateOccupationCategoryDto
>('updateOccupationCategory', endpoint);

export const { useRemoveOccupationCategoryMutation } = injectRemove(
  'removeOccupationCategory',
  endpoint
);
