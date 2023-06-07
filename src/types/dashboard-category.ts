import { Entity } from "@/types/common";

export interface DashboardCategory extends Entity {
    name: string
}

export class DashboardCategoryDto {
    name: string = ''
}