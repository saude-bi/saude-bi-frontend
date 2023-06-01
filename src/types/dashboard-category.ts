import { Entity } from "@/types/common";

export interface DashboardCategory extends Entity {
    name: string
}

export type DashboardCategoryDto = {
    id?: number,
    name: string
}