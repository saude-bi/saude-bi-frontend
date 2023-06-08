import { DataTable } from '@/components/Common/DataTable/DataTable';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import {
  OccupationCategory,
  useRemoveOccupationCategoryMutation,
  useFindAllOccupationCategoriesQuery,
} from '@/store/occupation-categories';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';

export default function OccupationCategoriesPage() {
  const columns = useMemo<MRT_ColumnDef<OccupationCategory>[]>(
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
        useFindAllQuery={useFindAllOccupationCategoriesQuery}
        useRemoveMutation={useRemoveOccupationCategoryMutation}
        columns={columns}
        pageModuleUrl="dashboard-category"
      />
    </CommonLayout>
  );
}
