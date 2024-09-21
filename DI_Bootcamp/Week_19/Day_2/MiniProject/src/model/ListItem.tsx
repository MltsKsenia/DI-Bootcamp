export interface Item {
    id: string;
    item: string;
    checked: boolean;
}

export class ListItem implements Item {
    constructor(public id: string, public item: string, public checked = false) { }

    toggleChecked() {
        this.checked = !this.checked;
    }
}