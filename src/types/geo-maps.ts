import { Entity } from './common';
import { DashboardCategory } from './dashboard-category';

export interface GeoMaps extends Entity {
  name: string;
  category: DashboardCategory;
  public: boolean;
}

export type CreateGeoMapsDto = {
  name: string;
  category: string;
  public: boolean;
};

export type UpdateGeoMapsDto = Partial<CreateGeoMapsDto>;
