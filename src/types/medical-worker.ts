import { Entity } from '@/types/common';
import { User } from '@/types/user';
import { Occupation } from './occupations';
import { Establishment } from './establishment';

export interface WorkRelation extends Entity {
  occupation: Occupation;
  establishment: Establishment;
}

export interface MedicalWorker extends Entity {
  user: User;
  name: string;
  gender: string;
  cns: string;
  cpf: string;
  workRelations: WorkRelation[];
}

export interface CreateWorkRelationDto {
  occupation: number;
  establishment: number;
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

export type UpdateMedicalWorkerDto = {
  user: {
    username: string;
    hasAccess?: boolean;
  };
  name: string;
  gender: string;
  cns: string;
  cpf: string;
  workRelations: WorkRelation[];
};
