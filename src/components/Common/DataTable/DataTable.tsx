import { Entity, PaginatedResponse, PaginationQuery } from '@/types/common';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { TypedUseQueryHookResult, UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { MantineReactTable, MantineReactTableProps } from 'mantine-react-table';
import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR';
import { RowActions } from './RowActions';

export type CrudMethods<T extends Entity> = {
  findAll: UseQuery<
    QueryDefinition<
      void | PaginationQuery,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      never,
      PaginatedResponse<T>
    >
  >;
  create?: number;
  update?: number;
  remove?: number;
};

interface Props<T extends Entity> extends MantineReactTableProps<T> {
  removeMutation?: (id: number) => void;
  refetch: () => void;
}

export const DataTable = <T extends Entity>(props: Props<T>) => {
  let x: CrudMethods<T>;

  return (
    <MantineReactTable
      manualPagination
      localization={MRT_Localization_PT_BR}
      enableHiding={false}
      enableDensityToggle={false}
      enableFullScreenToggle={false}
      positionGlobalFilter="left"
      mantinePaperProps={{ p: 'xl', radius: 'lg', shadow: 'sm', bg: 'white' }}
      initialState={{
        showGlobalFilter: true,
      }}
      enableRowActions
      getRowId={(row: Entity) => row.id.toString()}
      renderRowActions={({ row }) => (
        <RowActions
          id={+row.id}
          onRemove={(id) => {
            if (props.removeMutation) {
              props.removeMutation(id);
              props.refetch();
            }
          }}
        />
      )}
      {...props}
    />
  );
};
