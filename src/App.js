import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// HTML CSS JSResult Skip Results Iframe
// EDIT ON
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// Resources1× 0.5× 0.25×Rerun

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
          <h2 className="greet">
            Hi, I'm Jon  : ) <br />
            I build things.
            
            {/* CSS Animation TypeWriterEFFECT */}
            <br />
            <h2
              className="greet"
              href=""
              class="typewrite "
              data-period="2000"
              data-type='[ "Web Pages...", "Web Apps...", " Relationships." ]'
            >
              <span class="wrap"></span>
            </h2>
            <br />
          </h2>

          {/* <div className="body"> */}
          {/* <p id="greet">
            Hi, I'm Jon Josephson.
            <div id="pitch">
              <br /> I build things...
              <br /> Web Pages. Apps. Relationships.
            </div>
          </p> */}
          {/* </div> */}
        </div>

        <div id="quote">
          <h3>"{this.state.content}"</h3>
          <h3 className="font-italic">
            {this.state.hyphen}
            {this.state.author}
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
