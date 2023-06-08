import { GenericFindAllQuery, GenericRemoveMutation } from '@/store/common';
import { Entity } from '@/types/common';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR';
import { useState } from 'react';
import { ButtonCreate } from '../Buttons/Buttons';
import { RowActions } from './RowActions';
import { getCreatePath, getPreviewPath, getUpdatePath } from '@/utils/routes';

interface Props<T extends Entity> {
  useFindAllQuery: GenericFindAllQuery<T>;
  useRemoveMutation: GenericRemoveMutation;
  pageModuleUrl: string;
  canCreate?: boolean;
  canPreview?: boolean;
  canUpdate?: boolean;
  columns: MRT_ColumnDef<T>[];
}

export const DataTable = <T extends Entity>({
  useFindAllQuery,
  useRemoveMutation,
  columns,
  pageModuleUrl,
  canCreate,
  canPreview,
  canUpdate,
}: Props<T>) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { isLoading, data } = useFindAllQuery(
    { page: pagination.pageIndex, perPage: pagination.pageSize },
    { pollingInterval: 1000 }
  );
  const [remove] = useRemoveMutation();

  return (
    <MantineReactTable
      manualPagination
      onPaginationChange={setPagination}
      localization={MRT_Localization_PT_BR}
      enableFilters={false}
      enableHiding={false}
      enableDensityToggle={false}
      enableFullScreenToggle={false}
      positionGlobalFilter="left"
      mantinePaperProps={{ p: 'xl', radius: 'lg', shadow: 'sm', bg: 'white' }}
      initialState={{
        showGlobalFilter: true,
      }}
      state={{ isLoading, pagination }}
      renderToolbarInternalActions={() =>
        canCreate && <ButtonCreate href={getCreatePath(pageModuleUrl)}>NOVO</ButtonCreate>
      }
      enableRowActions
      columns={columns}
      data={data?.data || []}
      rowCount={data?.page.totalItems}
      getRowId={(row: Entity) => row.id?.toString()}
      renderRowActions={({ row }) => (
        <RowActions
          id={+row.id}
          previewUrl={canPreview ? getPreviewPath(pageModuleUrl, parseInt(row.id)) : undefined}
          updateUrl={canUpdate ? getUpdatePath(pageModuleUrl, parseInt(row.id)) : undefined}
          onRemove={remove}
        />
      )}
    />
  );
};
