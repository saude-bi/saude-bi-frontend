import {
  injectCreate,
  injectRemove,
} from '@/store/common';
import {
  CreateWorkRelationDto,
  MedicalWorker,
} from '@/types/medical-worker';

const endpoint = 'medical-workers';

export const { useCreateWorkRelationMutation } = injectCreate<
  MedicalWorker,
  CreateWorkRelationDto
>('createWorkRelation', endpoint);

export const { useRemoveWorkRelationMutation } = injectRemove('removeWorkRelation', endpoint);
