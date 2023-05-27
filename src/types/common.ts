export type Entity = { id: number; created: Date; updated: Date };
export type PaginatedResponse<T> = {
  data: T[];
  page: {
    perPage: number;
    totalItems: number;
    totalPages: number;
    current: number;
  };
};
