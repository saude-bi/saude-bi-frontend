'use client';

import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';
import { DataTable } from '@/components/Common/DataTable/DataTable';
import { useFindAllGeoLayerQuery, useRemoveGeoLayerMutation } from '@/store/geo-layer';
import { GeoLayer } from '@/types/geo-layer';

export default function GeoLayerPage() {
  const columns = useMemo<MRT_ColumnDef<GeoLayer>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'params', header: 'Parametros' },
      { accessorKey: 'source', header: 'Fonte' },
      { accessorKey: 'establishmentPropertyName', header: 'Parametro de Estabelecimento' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllGeoLayerQuery}
      useRemoveMutation={useRemoveGeoLayerMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
