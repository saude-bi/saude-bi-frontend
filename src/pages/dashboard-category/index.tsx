import { useEffect, useMemo, useState } from 'react';
import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
} from 'mantine-react-table';
import { useFindAllDashboardCategoriesQuery } from '@/store/dashboard-categories';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { DashboardCategory } from '@/types/dashboard-category';

export default function DashboardCategories() {
  const { isLoading, isError, data: dashboardCategories } = useFindAllDashboardCategoriesQuery();

  //data and fetching state
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
  }, [
    isLoading,
    isError,
    DashboardCategories,
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'id' as const,
        header: 'ID',
      },
      {
        accessorKey: 'name' as const,
        header: 'Nome',
      }
      //end
    ],
    [],
  );

  return (
    <CommonLayout title="Dashboards">
      <MantineReactTable
        columns={columns}
        data={dashboardCategories?.data || []}
        enableRowSelection
        getRowId={(row) => row.id.toString() }
        initialState={{ showColumnFilters: true }}
        manualFiltering
        manualPagination
        manualSorting
        mantineToolbarAlertBannerProps={
        isError
          ? {
              color: 'red',
              children: 'Error loading data',
            }
          : undefined
        }
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        rowCount={rowCount}
        state={{
          columnFilters,
          globalFilter,
          isLoading,
          pagination,
          showAlertBanner: isError,
          showProgressBars: isRefetching,
          sorting,
        }}
      />
    </CommonLayout>
  );
}
