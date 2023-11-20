'use client';

import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';
import { DataTable } from '@/components/Common/DataTable/DataTable';
import { useFindAllGeoDataSourceQuery, useRemoveGeoDataSourceMutation } from '@/store/geo-data-source';
import { GeoDataSource } from '@/types/geo-data-source';

export default function GeoDataSourcePage() {
  const columns = useMemo<MRT_ColumnDef<GeoDataSource>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllGeoDataSourceQuery}
      useRemoveMutation={useRemoveGeoDataSourceMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
