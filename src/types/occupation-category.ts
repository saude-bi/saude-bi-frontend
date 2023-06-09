import { Entity } from "@/types/common";

export interface OccupationCategory extends Entity {
    name: string
}

export type CreateOccupationCategoryDto = {
    name: string
}

export type UpdateOccupationCategoryDto = Partial<CreateOccupationCategoryDto>