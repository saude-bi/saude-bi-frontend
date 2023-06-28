'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import {
  useFindAllDashboardCategoriesQuery,
  useRemoveDashboardCategoryMutation,
} from '@/store/dashboard-categories';
import { DashboardCategory } from '@/types/dashboard-category';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function DashboardCategoriesPage() {
  const columns = useMemo<MRT_ColumnDef<DashboardCategory>[]>(
    () => [
      { accessorKey: 'id', header: 'Identificador' },
      { accessorKey: 'name', header: 'Nome' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllDashboardCategoriesQuery}
      useRemoveMutation={useRemoveDashboardCategoryMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
