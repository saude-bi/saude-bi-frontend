'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useFindAllDirectorshipsQuery, useRemoveDirectorshipMutation } from '@/store/directorship';
import { Directorship } from '@/types/directorship';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function DirectorshipPage() {
  const columns = useMemo<MRT_ColumnDef<Directorship>[]>(
    () => [
      { accessorKey: 'id', header: 'Identificador' },
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'acronym', header: 'Sigla' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllDirectorshipsQuery}
      useRemoveMutation={useRemoveDirectorshipMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
