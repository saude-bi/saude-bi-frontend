import { CreateGeoMapsDto, GeoMaps, UpdateGeoMapsDto } from '@/types/geo-maps';
import { injectCreate, injectFindAll, injectFindById, injectRemove, injectUpdate } from './common';

const endpoint = 'geographic-maps';
export const { useFindGeoMapsQuery } = injectFindById<GeoMaps>('findGeoMaps', endpoint);

export const { useFindAllGeoMapsQuery } = injectFindAll<GeoMaps, { name?: string }>(
  'findAllGeoMaps',
  endpoint
);

export const { useCreateGeoMapsMutation } = injectCreate<GeoMaps, CreateGeoMapsDto>(
  'createGeoMaps',
  endpoint
);

export const { useUpdateGeoMapsMutation } = injectUpdate<GeoMaps, UpdateGeoMapsDto>(
  'updateGeoMaps',
  endpoint
);

export const { useRemoveGeoMapsMutation } = injectRemove('removeGeoMaps', endpoint);
