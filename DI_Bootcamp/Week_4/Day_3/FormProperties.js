function modifySelect() {
    const selectElement = document.getElementById('school-type');

    const secondOptionValue = selectElement.options[1].value;
    console.log('Value of 2nd option:', secondOptionValue);

    const newOptionEnd = document.createElement('option');
    newOptionEnd.value = 'work';
    newOptionEnd.textContent = 'Work';
    selectElement.appendChild(newOptionEnd);

    const newOptionStart = document.createElement('option');
    newOptionStart.value = 'primaryschool';
    newOptionStart.textContent = 'Primary School';
    selectElement.insertBefore(newOptionStart, selectElement.firstChild);

    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === 'college') {
            selectElement.selectedIndex = i;
            break;
        }
    }

    document.getElementById('alert-button').addEventListener('click', function () {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        alert(`Selected: ${selectedOption.textContent}`);
    });
}

document.addEventListener('DOMContentLoaded', modifySelect);