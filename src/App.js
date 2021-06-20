import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./App.css";
import axios from "axios";

// API Variable
const QUOTE_API = "https://api.quotable.io/random";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  async componentWillMount() {
    await axios
      .get(QUOTE_API)
      .then((response) => {
        console.log(response.data.content);
        console.log("Now im REALLY in the API!");
        this.setState({
          content: response.data.content,
          author: response.data.author,
          hyphen: "- ",
        });
      })
      .catch((error) => {
        console.log(error);
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
        <div id="quote">
          <h3>"{this.state.content}"</h3>
          <h3 className="font-italic">
            {this.state.author}
            {this.state.hyphen}
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
