import { Entity } from "@/types/common";
import { OccupationCategory } from "./occupation-category";

export interface Occupation extends Entity {
    name: string,
    cbo: string,
    category: OccupationCategory
}

export type CreateOccupationDto = {
    name: string,
    cbo: string,
    category: OccupationCategory
}

export type UpdateOccupationDto = Partial<CreateOccupationDto>
