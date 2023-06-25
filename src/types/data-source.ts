import {Entity} from "@/types/common";

export interface DataSource extends Entity {
  name: string;
  url: string;
  credentials : {
    login: string;
    password: string;
  }
}

export type CreateDataSourceDto = {
  name: string;
  url: string;
  credentials : {
    login: string;
    password: string;
  }
};

export type UpdateDataSourceDto = Partial<CreateDataSourceDto>;
