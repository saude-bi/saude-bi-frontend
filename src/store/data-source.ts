import {
  injectFindById,
  injectRemove,
  injectFindAll,
  injectUpdate,
  injectCreate,
} from '@/store/common';
import { DataSource, CreateDataSourceDto, UpdateDataSourceDto } from '@/types/data-source';

const endpoint = 'data-sources';

export const { useFindDataSourceQuery } = injectFindById<DataSource>('findDataSource', endpoint);

export const { useFindAllDataSourceQuery } = injectFindAll<DataSource, { name?: string }>(
  'findAllDataSource',
  endpoint
);

export const { useCreateDataSourceMutation } = injectCreate<DataSource, CreateDataSourceDto>(
  'createDataSource',
  endpoint
);

export const { useUpdateDataSourceMutation } = injectUpdate<DataSource, UpdateDataSourceDto>(
  'updateDataSource',
  endpoint
);

export const { useRemoveDataSourceMutation } = injectRemove('removeDataSource', endpoint);
