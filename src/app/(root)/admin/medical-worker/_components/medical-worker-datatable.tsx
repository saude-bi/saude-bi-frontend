'use client';

import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { DataTable } from '@/components/Common/DataTable/DataTable';
import {
  useFindAllMedicalWorkersQuery,
  useRemoveMedicalWorkerMutation,
} from '@/store/medical-worker';
import { MedicalWorker } from '@/types/medical-worker';

export default function MedicalWorkerDatatable() {
  const columns = useMemo<MRT_ColumnDef<MedicalWorker>[]>(
    () => [
      { accessorKey: 'name', header: 'Nome' },
      { accessorKey: 'cpf', header: 'CPF' },
      { accessorKey: 'user.username', header: 'Usuário' },
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
