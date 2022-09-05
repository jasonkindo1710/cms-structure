export interface MenuItems{
    id: number;
    text: string;
    link: string;
    target?: string;
    icon?: string;
    menuId: number;
    created?: Date;
    createdBy?: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}