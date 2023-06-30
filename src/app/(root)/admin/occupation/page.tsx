'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useFindAllOccupationsQuery, useRemoveOccupationMutation } from '@/store/occupations';
import { Occupation } from '@/types/occupations';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function Occupations() {
  const columns = useMemo<MRT_ColumnDef<Occupation>[]>(
    () => [
      { accessorKey: 'id', header: 'Identificador' },
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'cbo', header: 'CBO' },
      { accessorKey: 'category.name', header: 'Nome da Categoria' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllOccupationsQuery}
      useRemoveMutation={useRemoveOccupationMutation}
      columns={columns}
      canCreate
      canPreview
      canUpdate
    />
  );
}
