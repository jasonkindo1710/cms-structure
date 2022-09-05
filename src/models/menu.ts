import { MenuItems } from "./menuItems";

export interface Menus {
    id: number;
    name: string;
    menus: MenuItems[];
    created?: Date;
    createdBy?: number;
    updated?: Date;
    updatedBy?: number;
    deleted: boolean;
}