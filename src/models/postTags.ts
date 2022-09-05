export interface PostTags {
    postId: number;
    tagId: number;
    created: Date;
    createdBy: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}