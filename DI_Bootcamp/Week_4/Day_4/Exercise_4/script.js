const allBooks = [
    {
        title: "Harry PotterHarry Potter and the Philosopher's Stone",
        author: "	J. K. Rowling",
        image: "https://media.minalima.com/2024/04/book-gallery-01-hpib01-2600x2600.jpg",
        alreadyRead: true
    },
    {
        title: "Peter Pan",
        author: "J. M. Barrie",
        image: "https://media.minalima.com/2024/04/book-gallery-01-b06-peter-pan-english-2600x2600.jpg",
        alreadyRead: false
    }
];

const listBooksDiv = document.querySelector('.listBooks');

const table = document.createElement('table');
table.style.width = '100%';
table.setAttribute('border', '1');

const headerRow = document.createElement('tr');
const headerTitle = document.createElement('th');
headerTitle.textContent = 'Title';
const headerAlreadyRead = document.createElement('th');
headerAlreadyRead.textContent = 'Already Read';
const headerAuthor = document.createElement('th');
headerAuthor.textContent = 'Author';
const headerImage = document.createElement('th');
headerImage.textContent = 'Image';

headerRow.appendChild(headerTitle);
headerRow.appendChild(headerAuthor);
headerRow.appendChild(headerImage);
table.appendChild(headerRow);


allBooks.forEach(book => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const alreadyReadCell = document.createElement('td');
    let readOrNot;
    if (book.alreadyRead === true) {
        readOrNot = "Already Read"
        alreadyReadCell.style.color = 'red';
    }
    else {
        readOrNot = "Not read yet"
    }
    alreadyReadCell.textContent = readOrNot;
    row.appendChild(alreadyReadCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = 'written by ' + book.author;
    row.appendChild(authorCell);

    const imageCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imageCell.appendChild(img);
    row.appendChild(imageCell);


    table.appendChild(row);
});
listBooksDiv.appendChild(table);
