import { FullList } from '../model/FullList';

export class ListTemplate {
    private ulElement: HTMLUListElement;

    constructor(ulElementId: string) {
        this.ulElement = document.getElementById(ulElementId) as HTMLUListElement;
    }

    renderList(): void {
        const list = FullList.getInstance().getItems();
        this.ulElement.innerHTML = '';

        list.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;
            checkbox.addEventListener('change', () => {
                FullList.getInstance().toggleItemChecked(item.id);
                this.renderList();
            });

            const label = document.createElement('label');
            label.textContent = item.item;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                FullList.getInstance().removeItem(item.id);
                this.renderList();
            });

            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(deleteButton);

            this.ulElement.appendChild(li);
        });
    }
}