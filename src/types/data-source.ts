import {Entity} from "@/types/common";

export interface DataSource extends Entity {
  name: string;
  url: string;
  secret: string;
}

export type CreateDataSourceDto = {
  name: string;
  url: string;
  secret: string;
};

export type UpdateDataSourceDto = Partial<CreateDataSourceDto>;
