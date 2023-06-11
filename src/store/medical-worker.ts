import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from '@/store/common';
import {
  CreateMedicalWorkerDto,
  MedicalWorker,
  UpdateMedicalWorkerDto,
} from '@/types/medical-worker';

const endpoint = 'medical-workers';

export const { useFindMedicalWorkerQuery } = injectFindById<MedicalWorker>(
  'findMedicalWorker',
  endpoint
);

export const { useFindAllMedicalWorkersQuery } = injectFindAll<MedicalWorker>(
  'findAllMedicalWorkers',
  endpoint
);

export const { useCreateMedicalWorkerMutation } = injectCreate<
  MedicalWorker,
  CreateMedicalWorkerDto
>('createMedicalWorker', endpoint);

export const { useUpdateMedicalWorkerMutation } = injectUpdate<
  MedicalWorker,
  UpdateMedicalWorkerDto
>('updateMedicalWorker', endpoint);

export const { useRemoveMedicalWorkerMutation } = injectRemove(
  'removeMedicalWorker',
  endpoint
);
