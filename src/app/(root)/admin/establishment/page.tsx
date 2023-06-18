'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import {
  useFindAllEstablishmentsQuery,
  useRemoveEstablishmentMutation,
} from '@/store/establishments';
import { DataTable } from '@/components/Common/DataTable/DataTable';
import { Establishment } from '@/types/establishment';

export default function EstablishmentPage() {
  const columns = useMemo<MRT_ColumnDef<Establishment>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'cnes', header: 'CNES' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllEstablishmentsQuery}
      useRemoveMutation={useRemoveEstablishmentMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
