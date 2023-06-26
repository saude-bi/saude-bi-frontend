import {
  injectFindById,
  injectRemove,
  injectFindAll,
  injectUpdate,
  injectCreate,
  injectFindByIdChild,
} from '@/store/common';

import {
  Dashboard,
  CreateDashboardDto,
  UpdateDashboardDto,
  FindDashboardUrlDto,
} from '@/types/dashboards';

const endpoint = 'dashboards';

const endpointUrl = 'dashboards/[slug]/url';

export const { useFindDashboardQuery } = injectFindById<Dashboard>('findDashboard', endpoint);

export const { useFindDashboardUrlQuery } = injectFindByIdChild<
  FindDashboardUrlDto,
  { workRelation: number }
>('findDashboardUrl', endpointUrl);

export const { useFindAllDashboardQuery } = injectFindAll<Dashboard>('findAllDashboard', endpoint);

export const { useCreateDashboardMutation } = injectCreate<Dashboard, CreateDashboardDto>(
  'createDashboard',
  endpoint
);

export const { useUpdateDashboardMutation } = injectUpdate<Dashboard, UpdateDashboardDto>(
  'updateDashboard',
  endpoint
);

export const { useRemoveDashboardMutation } = injectRemove('removeDashboard', endpoint);
