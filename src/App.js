import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// API Variable
const QUOTE_API = "https://quote-garden.herokuapp.com/api/v3/quotes/random";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };

    this.quote = this.quote.bind(this);
  }

  quote() {
    axios
      .get(QUOTE_API)
      .then((response) => {
        const { quoteText } = response.data.data[0].quoteText;
        const { quoteAuthor } = response.data.data[0].quoteAuthor;
        console.log("yay");
        console.log("response.data.data[0].quoteText");
        this.setState({
          quoteText: quoteText,
          quoteAuthor: quoteAuthor,
          hyphen: " -",
          error: null,
        });
        console.log("HIIIIII im in the API");
      })

      .catch((err) => {
        this.setState({
          error: err,
        });
        console.log("error");
      });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Personal Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                About <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                Projects
              </a>
              <a className="nav-item nav-link" href="#">
                Contact
              </a>
            </div>
          </div>
        </nav>
        <div className="body">
          <p>
            <br />
            Hello.
            <br /> I'm Jon.
            <br /> I build things...
            <br /> Web Pages. Apps. Relationships.
          </p>
        </div>
        {/* <div>"{this.state.quoteText}"</div> */}
      </div>
    );
  }
}

export default App;
