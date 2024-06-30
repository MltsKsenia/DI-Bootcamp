const quotes = [
    { id: 1, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 },
    { id: 2, author: "Isaac Newton", quote: "If I have seen further it is by standing on the shoulders of Giants.", likes: 0 },
    { id: 3, author: "Yoda", quote: "Do or do not. There is no try.", likes: 0 },
    { id: 4, author: "Marilyn Monroe", quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", likes: 0 },
    { id: 5, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", likes: 0 },
    { id: 6, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing.", likes: 0 },
    { id: 7, author: "Steve Jobs", quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", likes: 0 },
    { id: 8, author: "Oprah Winfrey", quote: "The biggest adventure you can take is to live the life of your dreams.", likes: 0 },
    { id: 9, author: "Mark Twain", quote: "The secret of getting ahead is getting started.", likes: 0 },
    { id: 10, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop.", likes: 0 },
    { id: 11, author: "Henry Ford", quote: "Whether you think you can or you think you can’t, you’re right.", likes: 0 },
    { id: 12, author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams.", likes: 0 },
    { id: 13, author: "Mahatma Gandhi", quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", likes: 0 }
];

let quoteHistory = [];
let lastQuoteId = null;
let filteredQuotes = [];
let currentQuoteIndex = null;

function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteId);

    const quote = quotes[randomIndex];
    lastQuoteId = randomIndex;

    quoteHistory.push(quote);
    currentQuoteIndex = quoteHistory.length - 1;

    document.getElementById("quoteDisplay").innerHTML = `
        <p>"${quote.quote}"</p>
        <p><strong>- ${quote.author}</strong></p>
    `;

    document.getElementById("likeCount").innerHTML = `♥ Likes: ${quote.likes}`;
    document.getElementById("navButtons").style.display = 'flex';
    document.getElementById("generate").style.display = 'none';
}


function addQuote(event) {
    event.preventDefault();
    const newQuoteText = document.getElementById("newQuote").value;
    const newAuthorText = document.getElementById("newAuthor").value;

    const newId = quotes.length + 1;
    const newQuote = { id: newId, author: newAuthorText, quote: newQuoteText, likes: 0 };
    quotes.push(newQuote);
    document.getElementById("filterID").placeholder = `number (1/${quotes.length})`;


    document.getElementById("quoteForm").reset();
    alert("New quote added successfully!");
}

function showCharacterCount(includeSpaces) {
    if (lastQuoteId === null) {
        alert("No quote generated yet!");
        return;
    }
    const quote = quotes[lastQuoteId].quote;
    const charCount = includeSpaces ? quote.length : quote.replace(/\s/g, '').length;
    alert(`Character Count: ${charCount}`);
}

function showWordCount() {
    if (lastQuoteId === null) {
        alert("No quote generated yet!");
        return;
    }
    const quote = quotes[lastQuoteId].quote;
    const wordCount = quote.split(/\s+/).length;
    alert(`Word Count: ${wordCount}`);
}

function likeQuote() {
    if (lastQuoteId === null) {
        alert("No quote generated yet!");
        return;
    }
    const quote = quotes[lastQuoteId];
    quote.likes++;
    document.getElementById("likeCount").innerHTML = `♥ Likes: ${quote.likes}`;
}

function filterQuotes(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById("filterID").value);
    filteredQuotes = quotes.filter(quote => quote.id === id);

    if (filteredQuotes.length === 0) {
        alert("Quotes with this ID were not found!");
        return;
    }

    currentQuoteIndex = 0;
    displayFilteredQuote();
}
function displayFilteredQuote() {
    const quote = filteredQuotes[currentQuoteIndex];
    document.getElementById("quoteDisplay").innerHTML = `
        <p>"${quote.quote}"</p>
        <p><strong>- ${quote.author}</strong></p>
    `;
    document.getElementById("likeCount").innerHTML = `Likes: ${quote.likes ?? 0}`;
}

function showPreviousQuote() {
    if (currentQuoteIndex <= 0) {
        alert("No previous quotes available!");
        return;
    }

    currentQuoteIndex--;
    const previousQuote = quoteHistory[currentQuoteIndex];

    document.getElementById("quoteDisplay").innerHTML = `
        <p>"${previousQuote.quote}"</p>
        <p><strong>- ${previousQuote.author}</strong></p>
    `;
    document.getElementById("likeCount").innerHTML = `♥ Likes: ${previousQuote.likes}`;
}

function showNextQuote() {
    generateQuote();
}