export interface Block {
    id: number;
    slug: string;
    content: string;
    created: Date;
    createdBy: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}