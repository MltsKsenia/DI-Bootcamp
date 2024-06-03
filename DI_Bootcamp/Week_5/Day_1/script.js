function insertRow() {
    const table = document.getElementById('sampleTable');

    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.textContent = `New row cell1`;
    cell2.textContent = `New row cell2`;
}