import { Entity } from './common';

export interface User extends Entity {
  username: string;
  isAdmin: boolean;
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
