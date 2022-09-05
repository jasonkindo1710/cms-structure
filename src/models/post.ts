export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    featuredImage?: number;
    metaTitle?: string;
    metaDescription?: string;
    metaKeyword?: string;
    status: string;
    allowComment: boolean;
    isPage: boolean;
    created: Date;
    createdBy: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}