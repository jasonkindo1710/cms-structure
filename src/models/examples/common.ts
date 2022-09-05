export interface PaginationParams {
    _limit: number;
    _page: number;
    _totalRows: number;
}

//kieu du lieu T bat ky listResponse<city> => data: city[];
//listResponse<student> => data: student
export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
}

export interface ListParams {
    _page?: number;
    _limit?: number;
    _sort?: string;
    _order?: 'asc' | 'desc';
    [key: string]: any //nhung kieu du lieu bat ki khac
}