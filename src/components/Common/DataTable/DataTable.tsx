import { Entity, PaginatedResponse, PaginationQuery } from '@/types/common';
import { Button } from '@mantine/core';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseQuery, UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR';
import { ButtonCreate, ButtonSave } from '../Buttons/Buttons';
import { RowActions } from './RowActions';

interface Props<T extends Entity> {
  useFindAllQuery: UseQuery<
    QueryDefinition<
      void | PaginationQuery,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      never,
      PaginatedResponse<T>
    >
  >;
  useRemoveMutation: UseMutation<
    MutationDefinition<
      number,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      never,
      null
    >
  >;
  createUrl?: string;
  previewUrl?: string;
  updateUrl?: string;
  columns: MRT_ColumnDef<T>[];
}

export const DataTable = <T extends Entity>({
  useFindAllQuery,
  useRemoveMutation,
  columns,
  createUrl,
  previewUrl,
  updateUrl,
}: Props<T>) => {
  const { refetch, data } = useFindAllQuery();
  const [remove] = useRemoveMutation();

  return (
    <MantineReactTable
      manualPagination
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
      renderToolbarInternalActions={() =>
        createUrl && <ButtonCreate href={createUrl}>NOVO</ButtonCreate>
      }
      enableRowActions
      columns={columns}
      data={data?.data || []}
      rowCount={data?.page.totalItems}
      getRowId={(row: Entity) => row.id.toString()}
      renderRowActions={({ row }) => (
        <RowActions
          id={+row.id}
          previewUrl={previewUrl}
          updateUrl={updateUrl}
          onRemove={(id) => {
            remove(id);
            refetch();
          }}
        />
      )}
    />
  );
};
