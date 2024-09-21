import { FullList } from './model/FullList';
import { ListTemplate } from './templates/ListTemplate';

document.addEventListener('DOMContentLoaded', () => {
  const fullList = FullList.getInstance();
  const listTemplate = new ListTemplate('listItems');

  listTemplate.renderList();

  const form = document.getElementById('itemEntryForm') as HTMLFormElement;
  const newItemInput = document.getElementById('newItem') as HTMLInputElement;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItemText = newItemInput.value.trim();
    if (newItemText) {
      fullList.addItem(newItemText);
      listTemplate.renderList();
      newItemInput.value = '';
    }
  });

  const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement;
  clearButton.addEventListener('click', () => {
    fullList.clearList();
    listTemplate.renderList();
  });
});