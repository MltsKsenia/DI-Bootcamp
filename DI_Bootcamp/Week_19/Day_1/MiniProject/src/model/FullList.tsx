import { ListItem } from './ListItem';

export class FullList {
    private static instance: FullList;
    private items: ListItem[];

    private constructor() {
        this.items = this.loadFromLocalStorage();
    }

    static getInstance(): FullList {
        if (!FullList.instance) {
            FullList.instance = new FullList();
        }
        return FullList.instance;
    }

    addItem(item: string): void {
        const newItem = new ListItem(item);
        this.items.push(newItem);
        this.saveToLocalStorage();
    }

    removeItem(id: string): void {
        this.items = this.items.filter(item => item.id !== id);
        this.saveToLocalStorage();
    }

    clearList(): void {
        this.items = [];
        this.saveToLocalStorage();
    }

    toggleItemChecked(id: string): void {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.toggleChecked();
            this.saveToLocalStorage();
        }
    }

    getItems(): ListItem[] {
        return this.items;
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('todoList', JSON.stringify(this.items));
    }

    private loadFromLocalStorage(): ListItem[] {
        const data = localStorage.getItem('todoList');
        return data ? JSON.parse(data) : [];
    }
}