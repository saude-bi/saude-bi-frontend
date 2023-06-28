'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import {
  useFindAllOccupationCategoriesQuery,
  useRemoveOccupationCategoryMutation,
} from '@/store/occupation-categories';
import { OccupationCategory } from '@/types/occupation-category';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function OccupationCaregories() {
  const columns = useMemo<MRT_ColumnDef<OccupationCategory>[]>(
    () => [
      { accessorKey: 'id', header: 'Identificador' },
      { accessorKey: 'name', header: 'Nome' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllOccupationCategoriesQuery}
      useRemoveMutation={useRemoveOccupationCategoryMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
