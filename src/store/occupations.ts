import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from './common';

import { Occupation, CreateOccupationDto, UpdateOccupationDto } from '@/types/occupations';

const endpoint = 'occupations';

export const { useFindOccupationQuery } = injectFindById<Occupation>('findOccupation', endpoint);

export const { useFindAllOccupationsQuery } = injectFindAll<Occupation>(
  'findAllOccupations',
  endpoint
);

export const { useCreateOccupationMutation } = injectCreate<Occupation, CreateOccupationDto>(
  'createOccupation',
  endpoint
);

export const { useUpdateOccupationMutation } = injectUpdate<Occupation, UpdateOccupationDto>(
  'updateOccupation',
  endpoint
);

export const { useRemoveOccupationMutation } = injectRemove('removeOccupation', endpoint);
