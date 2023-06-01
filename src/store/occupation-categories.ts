import { Entity } from '@/types/common';
import { Occupation } from '@/types/occupation';
import { injectCreate, injectDelete, injectFindAll, injectFindById, injectUpdate } from './common';

const endpoint = 'occupation-categories';

export interface OccupationCategory extends Entity {
  name: string;
  occupations: Occupation[];
}

export const { useFindOccupationCategoryQuery } = injectFindById<OccupationCategory>(
  'findOccupationCategory',
  endpoint
);

export const { useFindAllOccupationCategoriesQuery } = injectFindAll<OccupationCategory>(
  'findAllOccupationCategories',
  endpoint
);

export const { useCreateOccupationCategoryMutation } = injectCreate<OccupationCategory>(
  'createOccupationCategory',
  endpoint
);

export const { useUpdateOccupationCategoryMutation } = injectUpdate<OccupationCategory>(
  'updateOccupationCategory',
  endpoint
);

export const { useDeleteOccupationCategoryMutation } = injectDelete(
  'deleteOccupationCategory',
  endpoint
);
