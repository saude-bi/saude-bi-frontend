import { Entity } from './common';
import { MedicalWorker } from './medical-worker';

export interface User extends Entity {
  username: string;
  isAdmin: boolean;
}

export interface UserInfo extends Entity {
  username: string;
  isAdmin: boolean;
  medicalWorker?: MedicalWorker;
}

export type CreateUserDto = {
  username: string;
  password: string;
};

export type UpdateUserDto = Partial<CreateUserDto>;

export type LoginFormDto = {
  username: string;
  password: string;
};
