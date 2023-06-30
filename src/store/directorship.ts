import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from './common';
import { Directorship, CreateDirectorshipDto, UpdateDirectorshipDto } from '@/types/directorship';

const endpoint = 'directorships';

export const { useFindDirectorshipQuery } = injectFindById<Directorship>(
  'findDirectorship',
  endpoint
);

export const { useFindAllDirectorshipsQuery } = injectFindAll<Directorship, { name?: string }>(
  'findAllDirectorships',
  endpoint
);

export const { useCreateDirectorshipMutation } = injectCreate<Directorship, CreateDirectorshipDto>(
  'createDirectorship',
  endpoint
);

export const { useUpdateDirectorshipMutation } = injectUpdate<Directorship, UpdateDirectorshipDto>(
  'updateDirectorship',
  endpoint
);

export const { useRemoveDirectorshipMutation } = injectRemove('removeDirectorship', endpoint);
