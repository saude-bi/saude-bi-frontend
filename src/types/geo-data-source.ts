import { Entity } from "@/types/common";
import { DashboardCategory } from "./dashboard-category";

export interface GeoDataSource extends Entity{
    name: string;
    sourceUrl: string;
    category: DashboardCategory;
    credentials: {
        username: string;
        password: string;
    }
}

export type CreateGeoDataSourceDto = {
    name: string;
    sourceUrl: string;
    category: string;
    credentials: {
        username: string;
        password: string;
    }
};

export type UpdateGeoDataSourceDto = Partial<CreateGeoDataSourceDto>;