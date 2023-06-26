import { injectCreate, injectCreateChild, injectRemove, injectRemoveChild } from '@/store/common';
import { CreateWorkRelationDto, MedicalWorker, WorkRelation } from '@/types/medical-worker';

const endpoint = 'medical-workers/[slug]/work-relations';

export const { useCreateWorkRelationMutation } = injectCreateChild<
  MedicalWorker,
  CreateWorkRelationDto
>('createWorkRelation', endpoint);

export const { useRemoveWorkRelationMutation } = injectRemoveChild('removeWorkRelation', endpoint);
