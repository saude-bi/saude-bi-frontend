import { Entity } from './common';
import { GeoDataSource } from './geo-data-source';

export interface GeoLayer extends Entity {
    name: string;
    params: string;
    source: GeoDataSource;
}

export type CreateGeoLayerDto = {
    source: number,
    params: string,
    name: string
    establishmentPropertyName: string,
};

export type UpdateGeoLayerDto = Partial<CreateGeoLayerDto>;
