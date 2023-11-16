import { CreateGeoLayerDto, GeoLayer, UpdateGeoLayerDto } from "@/types/geo-layer";
import { injectCreate, injectFindAll, injectFindById, injectRemove, injectUpdate } from "./common";
import { string } from "zod";

const endpoint = 'geo-layer';

export const { useFindGeoLayerQuery } = injectFindById<GeoLayer>(
    'findGeoLayer',
    endpoint
);

export const ( useFindAllGeoLayersQuery ) = injectFindAll<GeoLayer, { name?: string }>(
    'findAllGeoLayer',
    endpoint
);

export const { useCreateGeoLayerMutation } = injectCreate<
    GeoLayer,
    CreateGeoLayerDto
>('createGeoLayer', endpoint);

export const { useUpdateGeoLayerMutation } = injectUpdate<
    GeoLayer,
    UpdateGeoLayerDto
>('updateGeoLayer', endpoint);

export const { useRemoveGeoLayerMutation } = injectRemove('removeGeoLayer', endpoint);
