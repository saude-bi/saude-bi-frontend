'use client'

import { DataTable } from "@/components/Common/DataTable/DataTable";
import { useFindAllGeoDataSourceQuery, useRemoveGeoDataSourceMutation } from "@/store/geo-data-source";
import { GeoDataSource } from "@/types/geo-data-source"
import { MRT_ColumnDef } from "mantine-react-table"
import { useMemo } from "react"

export default function GeoDataSourcePage () {
    const columns = useMemo<MRT_ColumnDef<GeoDataSource>[]>(
        () => [
            { accessorKey: 'name', header: 'Nome' },
            { accessorKey: 'category.name', header: 'Categoria' },
        ],
        []
    );

    return (
        <DataTable
            useFindAllQuery={useFindAllGeoDataSourceQuery}
            useRemoveMutation={useRemoveGeoDataSourceMutation}
            columns={columns}
            canCreate
            canUpdate
            canPreview
        />
    );
}