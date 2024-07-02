const quotes = [
  {
    id: 1,
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    id: 2,
    quote: "You can observe a lot just by watching.",
    author: "Yogi Berra",
  },
  {
    id: 3,
    quote: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    id: 4,
    quote: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    id: 5,
    quote: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
  },
  {
    id: 6,
    quote: "Be the chief but never the lord.",
    author: "Lao Tzu",
  },
  {
    id: 7,
    quote: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    id: 8,
    quote: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    id: 9,
    quote: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    id: 10,
    quote: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
];

const nextPrevIndx = 0;

function searchAuthor() {
  const name = document.getElementById("author").value;
  const filterQuotes = quotes.filter((item) => {
    return item.author.toLowerCase().includes(name.toLowerCase());
  });
  nextPrevIndx = 0;
  nextAuthorQuote(filterQuotes);
}

function nextAuthorQuote(arr) {
  if (arr.length > nextPrevIndx) {
    renderOneQuote(arr[nextPrevIndx]);
    nextPrevIndx++;
  }
}
function prevAuthorQuote(arr) {
  if (nextPrevIndx >= 0) {
    nextPrevIndx--;
    renderOneQuote(arr[nextPrevIndx]);
    
  }
}

function renderOneQuote(quote) {
  const html = `<div>
    <h4>${quote.id}. ${quote.quote}</h4>
    <blockquote>- ${quote.author}</blockquote>
  </div>`;
  document.getElementById("root").innerHTML = html;
}

function render(arr) {
  const html = arr.map((item) => {
    return `<div>
      <h4>${item.id}. ${item.quote}</h4>
      <blockquote>- ${item.author}</blockquote>
    </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
}

render(quotes);
