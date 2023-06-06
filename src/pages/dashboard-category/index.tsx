import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import {
  useFindAllDashboardCategoriesQuery,
  useRemoveDashboardCategoryMutation,
} from '@/store/dashboard-categories';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { DashboardCategory } from '@/types/dashboard-category';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function DashboardCategories() {
  const columns = useMemo<MRT_ColumnDef<DashboardCategory>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'created', header: 'Data de Criacao' },
      { accessorKey: 'updated', header: 'Data de Atualizacao' },
    ],
    []
  );

  return (
    <CommonLayout title="Categorias de Ocupacoes">
      <DataTable
        useFindAllQuery={useFindAllDashboardCategoriesQuery}
        useRemoveMutation={useRemoveDashboardCategoryMutation}
        columns={columns}
      />
    </CommonLayout>
  );
}
