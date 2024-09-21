import { v4 as uuidv4 } from 'uuid';

export interface IListItem {
    id: string;
    item: string;
    checked: boolean;
}

export class ListItem implements IListItem {
    id: string;
    item: string;
    checked: boolean;

    constructor(item: string, checked: boolean = false) {
        this.id = uuidv4();
        this.item = item;
        this.checked = checked;
    }

    toggleChecked(): void {
        this.checked = !this.checked;
    }
}