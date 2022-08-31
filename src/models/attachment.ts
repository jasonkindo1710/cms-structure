export interface Attachment {
    id: number;
    filename: string;
    description?: string;
    allText?: string;
    path: string;
    created: Date;
    createdBy: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean
}