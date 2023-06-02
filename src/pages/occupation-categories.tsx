import { DataTable } from '@/components/Common/DataTable/DataTable';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import {
  OccupationCategory,
  useCreateOccupationCategoryMutation,
  useRemoveOccupationCategoryMutation,
  useFindAllOccupationCategoriesQuery,
  useUpdateOccupationCategoryMutation,
} from '@/store/occupation-categories';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useEffect, useMemo } from 'react';

export default function OccupationCategoriesPage() {
  const { data, refetch } = useFindAllOccupationCategoriesQuery();
  const [create, createResult] = useCreateOccupationCategoryMutation();
  const [update, updateResult] = useUpdateOccupationCategoryMutation();
  const [remove, removeResult] = useRemoveOccupationCategoryMutation();

  useEffect(() => {
    console.log(data);
  });

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
        columns={columns}
        data={data?.data || []}
        rowCount={data?.page.totalItems}
        removeMutation={remove}
        refetch={refetch}
      />
    </CommonLayout>
  );
}
