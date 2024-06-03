document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('letters');
    const confirmButton = document.getElementById('confirm');
    const message = document.getElementById('message');

    input.addEventListener('keyup', function () {
        input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    });

    confirmButton.addEventListener('click', function () {
        const inputValue = input.value;
        message.textContent = inputValue;
    });
});