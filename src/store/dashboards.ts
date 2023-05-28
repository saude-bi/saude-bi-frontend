import { Entity } from '@/types/common';
import { injectCreate, injectDelete, injectFindAll, injectFindById, injectUpdate } from './common';

const endpoint = 'dashboards';

interface Dashboard extends Entity {
 
}

export const { useFindDashboardQuery } = injectFindById<Dashboard>(
   'findDashboard',
   endpoint
);

export const { useFindAllDashboardsQuery } = injectFindAll<Dashboard>(
   'findAllDashboards',
   endpoint
);

export const { useCreateDashboardMutation } = injectCreate<Dashboard>(
   'createDashboard',
   endpoint
);

export const { useUpdateDashboardMutation } = injectUpdate<Dashboard>(
   'updateDashboard',
   endpoint
);

export const { useDeleteDashboardMutation } = injectDelete('deleteDashboard', endpoint);
