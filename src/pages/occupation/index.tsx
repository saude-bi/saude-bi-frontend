import { useMemo } from 'react';
import { MRT_ColumnDef } from 'mantine-react-table';
import 
{ 
    useFindAllOccupationsQuery, 
    useRemoveOccupationMutation 
} 
from "@/store/occupations";
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { Occupation } from '@/types/occupations';
import { DataTable } from '@/components/Common/DataTable/DataTable';

export default function Occupations() {
    const columns = useMemo<MRT_ColumnDef<Occupation>[]>(
        () => [
          { accessorKey: 'name', header: 'Nome' },
          { accessorKey: 'created', header: 'Data de Criacao' },
          { accessorKey: 'updated', header: 'Data de Atualizacao' },
          { accessorKey: "category.name", header: "Nome da Categoria" }
        ],
        []
      );
    
      return (
        <CommonLayout title='Ocupações'>
            <DataTable 
                useFindAllQuery={useFindAllOccupationsQuery}
                useRemoveMutation={useRemoveOccupationMutation}
                columns={columns}
                canCreate
                canPreview
                canUpdate
            />
        </CommonLayout>
      )
}