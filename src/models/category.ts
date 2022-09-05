export interface Category {
    id: number;
    name: string;
    slug: string;
    image?: number;
    description?: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeyword?: string;
    parentCategoryId?:number;
    isTag: boolean;
    created: Date;
    createdBy:number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}