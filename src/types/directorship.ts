import { Entity } from '@/types/common';

export interface Directorship extends Entity {
  name: string;
  acronym: string;
}

export type CreateDirectorshipDto = {
  name: string;
  acronym: string;
};

export type UpdateDirectorshipDto = Partial<CreateDirectorshipDto>;
