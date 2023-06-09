'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { DataSource } from '@/types/data-source';
import { DataTable } from '@/components/Common/DataTable/DataTable';
import { useFindAllDataSourceQuery, useRemoveDataSourceMutation } from '@/store/data-source';

export default function DataSource() {
  const columns = useMemo<MRT_ColumnDef<DataSource>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'url', header: 'URL' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllDataSourceQuery}
      useRemoveMutation={useRemoveDataSourceMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
