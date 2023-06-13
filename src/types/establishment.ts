import { Entity } from '@/types/common';

export interface Establishment extends Entity {
  name: string;
  cnes: string;
}

export type CreateEstablishmentDto = {
  name: string;
  cnes: string;
};

export type UpdateEstablishmentDto = Partial<CreateEstablishmentDto>;
