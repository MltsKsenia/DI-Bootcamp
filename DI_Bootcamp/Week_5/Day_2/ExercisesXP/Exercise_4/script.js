function calculateVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

document.getElementById('MyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        alert('Please enter a valid positive number for the radius.');
        return;
    }
    const volume = calculateVolume(radius);

    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(2);
});