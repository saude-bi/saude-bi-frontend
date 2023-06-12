import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import {
  useFindAllEstablishmentsQuery,
  useRemoveEstablishmentMutation,
} from '@/store/establishments';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function Establishment() {
    const columns = useMemo<MRT_ColumnDef<Establishment>[]>(
        () => [
            { accessorKey: 'name', header: 'Nome' },
            { accessorKey: 'cnes', header: 'CNES' },
        ],
        []
    );

    return (
        <CommonLayout title="Estabelecimentos">
            <DataTable
              useFindAllQuery={useFindAllEstablishmentsQuery}
              useRemoveMutation={useRemoveEstablishmentMutation}
              columns={columns}
              canCreate
              canUpdate
              canPreview
            />
        </CommonLayout>
    );
}
