'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { DataTable } from '@/components/Common/DataTable/DataTable';
import {
  useFindAllMedicalWorkersQuery,
  useRemoveMedicalWorkerMutation,
} from '@/store/medical-worker';
import { MedicalWorker } from '@/types/medical-worker';

export default function MedicalWorkerPage() {
  const columns = useMemo<MRT_ColumnDef<MedicalWorker>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'created', header: 'Data de Criacao' },
      { accessorKey: 'updated', header: 'Data de Atualizacao' },
    ],
    []
  );

  return (
    <DataTable
      useFindAllQuery={useFindAllMedicalWorkersQuery}
      useRemoveMutation={useRemoveMedicalWorkerMutation}
      columns={columns}
      canCreate
      canUpdate
      canPreview
    />
  );
}
