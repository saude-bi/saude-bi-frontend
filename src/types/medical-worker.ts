import { Entity } from '@/types/common';
import { User } from '@/types/user';

export interface MedicalWorker extends Entity {
  user: User;
  name: string;
  gender: string;
  cns: string;
  cpf: string;
}

export type CreateMedicalWorkerDto = {
  user: {
    username: string;
    password: string;
    confirmPassword: string;
  };
  name: string;
  gender: string;
  cns: string;
  cpf: string;
};

export type UpdateMedicalWorkerDto = Partial<CreateMedicalWorkerDto>;
