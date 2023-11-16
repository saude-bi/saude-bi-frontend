import { Entity } from "./common";

export interface GeoLayer extends Entity{
    name: string;
    params: string;
    source: any;
}

export type CreateGeoLayerDto = {
    name: string;
    params: string;
    source: any;
};

export type UpdateGeoLayerDto = Partial<CreateGeoLayerDto>;