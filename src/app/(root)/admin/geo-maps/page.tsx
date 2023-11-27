'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useFindAllGeoMapsQuery, useRemoveGeoMapsMutation } from '@/store/geo-maps';
import { DataTable } from '@/components/Common/DataTable/DataTable';
import { GeoMaps } from '@/types/geo-maps';

export default function GeoMapsPage() {
  const columns = useMemo<MRT_ColumnDef<GeoMaps>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'category.name', header: 'Categoria' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllGeoMapsQuery}
      useRemoveMutation={useRemoveGeoMapsMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
