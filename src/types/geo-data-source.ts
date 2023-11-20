import { Entity } from '@/types/common';

export interface GeoDataSource extends Entity {
  name: string;
  sourceUrl: string;
}

export type CreateGeoDataSourceDto = {
  name: string;
  sourceUrl: string;
};

export type UpdateGeoDataSourceDto = Partial<CreateGeoDataSourceDto>;
