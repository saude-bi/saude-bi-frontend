import { CreateGeoLayerDto, FindGeoLayerDataDto, GeoLayer, UpdateGeoLayerDto } from '@/types/geo-layer';
import { injectCreate, injectFindAll, injectFindById, injectFindByIdChild, injectRemove, injectUpdate } from './common';

const endpoint = 'geographic-layers';

const endpointUrl = 'geographic-layers/[slug]/data';

export const { useFindGeoLayerQuery } = injectFindById<GeoLayer>(
    'findGeoLayer',
    endpoint
);

export const { useFindGeographicLayerDataQuery } = injectFindByIdChild<
    FindGeoLayerDataDto,
    { workRelation: number }
>(
    'findGeographicLayerData', endpointUrl
);

export const { useFindAllGeoLayerQuery } = injectFindAll<GeoLayer, { name?: string }>(
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
