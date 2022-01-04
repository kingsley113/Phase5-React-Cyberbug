import React, { PureComponent } from "react";

let refreshInterval;

class RandomQuote extends PureComponent {
  state = {
    quoteText: "",
    quoteAuthor: "",
  };

  fetchQuote() {
    return fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const quote = json[Math.floor(Math.random() * json.length)];
        this.setState({
          quoteText: quote.text,
          quoteAuthor: quote.author,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="quote-container">
        <div className="center-align-text" id="quote-text">
          <p>{this.state.quoteText} </p>
        </div>
        <div className="center-align-text">
          <p> &nbsp;&nbsp;-{this.state.quoteAuthor}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchQuote();
    // TODO: uncomment this to enable auto refreshing quotes
    refreshInterval = setInterval(() => this.fetchQuote(), 8000);
  }

  componentWillUnmount() {
    clearInterval(refreshInterval);
  }
}

export default RandomQuote;
