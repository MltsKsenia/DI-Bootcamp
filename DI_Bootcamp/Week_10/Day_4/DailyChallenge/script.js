document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const gifForm = document.getElementById('gif-form');
    const gifCategoryInput = document.getElementById('gif-category');
    const gifContainer = document.getElementById('gif-container');
    const deleteAllBtn = document.getElementById('delete-all-btn');

    gifForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const category = gifCategoryInput.value.trim();
        if (category) {
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`);
                const result = await response.json();
                const gifUrl = result.data.images.original.url;
                const gifItem = document.createElement('div');
                gifItem.classList.add('gif-item');
                gifItem.innerHTML = `
                    <img src="${gifUrl}" alt="${category} GIF">
                    <button class="delete-btn">Delete</button>
                `;
                gifContainer.appendChild(gifItem);

                const deleteBtn = gifItem.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {
                    gifContainer.removeChild(gifItem);
                });

                gifCategoryInput.value = '';
            } catch (error) {
                console.error('Error fetching GIF:', error);
            }
        }
    });

    deleteAllBtn.addEventListener('click', () => {
        gifContainer.innerHTML = '';
    });
});
