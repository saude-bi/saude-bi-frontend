import { Entity } from './common';

export interface User extends Entity {
  username: string;
  isAdmin: boolean;
}

export type LoginFormDto = {
  username: string;
  password: string;
};
