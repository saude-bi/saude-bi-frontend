import {
  injectFindById,
  injectRemove,
  injectFindAll,
  injectUpdate,
  injectCreate,
} from '@/store/common';

import { Dashboard, CreateDashboardDto, UpdateDashboardDto } from "@/types/dashboards"

const endpoint = 'dashboards';


export const { useFindDashboardQuery } = injectFindById<Dashboard>('findDashboard', endpoint);

export const { useFindAllDashboardQuery } = injectFindAll<Dashboard>(
  'findAllDashboard',
  endpoint
);

export const { useCreateDashboardMutation } = injectCreate<Dashboard, CreateDashboardDto>(
  'createDashboard',
  endpoint
);

export const { useUpdateDashboardMutation } = injectUpdate<Dashboard, UpdateDashboardDto>(
  'updateDashboard',
  endpoint
);

export const { useRemoveDashboardMutation } = injectRemove('removeDashboard', endpoint);