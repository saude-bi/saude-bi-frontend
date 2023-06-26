'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useFindAllDashboardQuery, useRemoveDashboardMutation } from '@/store/dashboards';
import { Dashboard } from '@/types/dashboards';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function Dashboards() {
    const columns = useMemo<MRT_ColumnDef<Dashboard>[]>(
        () => [
          { accessorKey: 'name', header: 'Nome' },
        ],
        []
      );
}