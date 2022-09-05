export interface User {
    id: number;
    avatar?: number;
    fullname?: string;
    email: string;
    username: string;
    password: string;
    role: string;
    created: Date;
    createdBy: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}