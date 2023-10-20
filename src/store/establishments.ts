import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from './common';
import {
  CreateEstablishmentDto,
  Establishment,
  UpdateEstablishmentDto,
} from '@/types/establishment';

const endpoint = 'establishments';

export const { useFindEstablishmentQuery } = injectFindById<Establishment>(
  'findEstablishment',
  endpoint
);

export const { useFindAllEstablishmentsQuery } = injectFindAll<Establishment, { name?: string }>(
  'findAllEstablishments',
  endpoint
);

export const { useCreateEstablishmentMutation } = injectCreate<
  Establishment,
  CreateEstablishmentDto
>('createEstablishment', endpoint);

export const { useUpdateEstablishmentMutation } = injectUpdate<
  Establishment,
  UpdateEstablishmentDto
>('updateEstablishment', endpoint);

export const { useRemoveEstablishmentMutation } = injectRemove('removeEstablishment', endpoint);
