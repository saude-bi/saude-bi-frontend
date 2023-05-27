import { Entity } from './common';

export interface User extends Entity {
  username: string;
  isAdmin: boolean;
}

export type LoginForm = {
  username: string;
  password: string;
};
