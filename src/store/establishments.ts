import { Entity } from '@/types/common';
import { injectCreate, injectDelete, injectFindAll, injectFindById, injectUpdate } from './common';

const endpoint = 'establishments';

interface Establishment extends Entity {
  cnes: string;
  name: string;
}

export const { useFindEstablishmentQuery } = injectFindById<Establishment>(
  'findEstablishment',
  endpoint
);

export const { useFindAllEstablishmentsQuery } = injectFindAll<Establishment>(
  'findAllEstablishments',
  endpoint
);

export const { useCreateEstablishmentMutation } = injectCreate<Establishment>(
  'createEstablishment',
  endpoint
);

export const { useUpdateEstablishmentMutation } = injectUpdate<Establishment>(
  'updateEstablishment',
  endpoint
);

export const { useDeleteEstablishmentMutation } = injectDelete('deleteEstablishment', endpoint);
