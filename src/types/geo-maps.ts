import { Entity } from "./common";
import { DashboardCategory } from "./dashboard-category";

export interface GeoMaps extends Entity{
    name: string;
    category: DashboardCategory;
}

export type CreateGeoMapsDto = {
    name: string;
    category: DashboardCategory;
}

export type UpdateGeoMapsDto = Partial<CreateGeoMapsDto>;