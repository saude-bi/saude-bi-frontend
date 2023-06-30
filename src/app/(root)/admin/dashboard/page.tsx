'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useFindAllDashboardQuery, useRemoveDashboardMutation } from '@/store/dashboards';
import { Dashboard } from '@/types/dashboards';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function Dashboards() {
    const columns = useMemo<MRT_ColumnDef<Dashboard>[]>(
        () => [
          { accessorKey: 'dataSource.name', header: 'Fonte de Dados' },
          { accessorKey: 'category.name', header: 'Categoria de Dashboard' },
          { accessorKey: 'metabaseId', header: 'Identificador do Metabase' },
          { accessorKey: 'name', header: 'Nome do Dashboard' },
          { accessorKey: 'establishmentPropertyName', header: 'Parametro' },
        ],
        []
      );

      return (
        <DataTable
          useFindAllQuery={useFindAllDashboardQuery}
          useRemoveMutation={useRemoveDashboardMutation}
          columns={columns}
          canCreate
          canPreview
          canUpdate
        />
      )
}