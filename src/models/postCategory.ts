export interface PostCategory{
    postId: number;
    categoryId: number;
    created: Date;
    createdBy: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}