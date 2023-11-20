import { Entity } from './common';
import { GeoDataSource } from './geo-data-source';
import { GeoJsonObject } from 'geojson';

export interface FindGeoLayerDataDto extends Entity {
  data: any;
}

export interface GeoLayer extends Entity {
  name: string;
  params: string;
  source: GeoDataSource;
  establishmentPropertyName: string;
}

export type CreateGeoLayerDto = {
  source: number,
  params: string,
  name: string
  establishmentPropertyName: string,
};

export type UpdateGeoLayerDto = Partial<CreateGeoLayerDto>;
