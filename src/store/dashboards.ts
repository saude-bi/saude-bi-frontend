import { Entity } from '@/types/common';
import { injectCreate, injectRemove, injectFindAll, injectFindById, injectUpdate } from './common';

const endpoint = 'dashboard';

interface Dashboard extends Entity {}

export const { useFindDashboardQuery } = injectFindById<Dashboard>('findDashboard', endpoint);

export const { useFindAllDashboardsQuery } = injectFindAll<Dashboard>(
  'findAllDashboards',
  endpoint
);

export const { useCreateDashboardMutation } = injectCreate<Dashboard>('createDashboard', endpoint);

export const { useUpdateDashboardMutation } = injectUpdate<Dashboard>('updateDashboard', endpoint);

export const { useRemoveDashboardMutation } = injectRemove('removeDashboard', endpoint);
