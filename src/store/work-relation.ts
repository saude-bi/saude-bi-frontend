import { injectCreateChild, injectRemoveChild } from '@/store/common';
import { CreateWorkRelationDto, MedicalWorker } from '@/types/medical-worker';

const endpoint = 'medical-workers/[slug]/work-relations';

export const { useCreateWorkRelationMutation } = injectCreateChild<
  MedicalWorker,
  CreateWorkRelationDto
>('createWorkRelation', endpoint, {
  addTagTypes: ['medical-workers'],
  invalidatesTags: [{ type: 'medical-workers' }],
});

export const { useRemoveWorkRelationMutation } = injectRemoveChild('removeWorkRelation', endpoint, {
  addTagTypes: ['medical-workers'],
  invalidatesTags: [{ type: 'medical-workers' }],
});
