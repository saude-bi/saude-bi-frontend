import { CreateGeoDataSourceDto, GeoDataSource, UpdateGeoDataSourceDto } from '@/types/geo-data-source';
import { injectCreate, injectFindAll, injectFindById, injectRemove, injectUpdate } from './common';

const endpoint = 'geographic-data-source';

export const { useFindGeoDataSourceQuery } = injectFindById<GeoDataSource>(
  'findGeoDataSource', endpoint
);

export const { useFindAllGeoDataSourceQuery } = injectFindAll<GeoDataSource, { name?: string }>(
  'findAllGeoDataSource',
  endpoint
);

export const { useCreateGeoDataSourceMutation } = injectCreate<
  GeoDataSource, CreateGeoDataSourceDto
>(
  'createGeoDataSource',
  endpoint
);

export const { useUpdateGeoDataSourceMutation } = injectUpdate<
  GeoDataSource, UpdateGeoDataSourceDto
>(
  'updateGeoDataSource',
  endpoint
);

export const { useRemoveGeoDataSourceMutation } = injectRemove('removeGeoDataSource', endpoint);
