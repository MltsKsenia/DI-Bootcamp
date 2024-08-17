// QuoteAndAuthor.jsx
import React from "react";

class QuoteAndAuthor extends React.Component {
    render() {
        const { displayColor, quote, author, handleClick } = this.props;

        return (
            <div style={{ backgroundColor: "white" }} className="quotebox">
                <div
                    className="fadeIn"
                    key={quote}
                    style={{ color: displayColor }}
                >
                    <h1 id="quote">"{quote}"</h1>
                    <h5 id="author">
                        -{author ? author : "Unknown"}-
                    </h5>
                </div>
                <button
                    style={{ backgroundColor: displayColor }}
                    id="newquote"
                    onClick={handleClick}
                >
                    New quote
                </button>
            </div>
        );
    }
}

export default QuoteAndAuthor;
