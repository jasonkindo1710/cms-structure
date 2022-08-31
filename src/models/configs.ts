export interface Configs{
    id: number;
    key: string;
    value: string;
    created: Date;
    createdBy: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}