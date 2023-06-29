import { Entity } from '@/types/common';
import { Directorship } from '@/types/directorship';

export interface Establishment extends Entity {
  name: string;
  cnes: string;
  directorship: Directorship;
}

export type CreateEstablishmentDto = {
  name: string;
  cnes: string;
  directorship: string
};

export type UpdateEstablishmentDto = Partial<CreateEstablishmentDto>;
