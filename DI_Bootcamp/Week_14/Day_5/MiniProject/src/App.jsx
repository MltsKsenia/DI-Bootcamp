// App.jsx
import React from "react";
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './components/Quotes';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  randomQuote = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomNumber].quote === this.state.quote);
    return quotes[randomNumber];
  };

  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author,
    });
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return (
      <div>
        <QuoteAndAuthor
          displayColor={this.randomColor()}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
