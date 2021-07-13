import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-scroll";

// TYPEWRITER EFFECT
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
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-black">
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
              <Link to="about" spy={true} auto={true}>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                  className="nav-item nav-link active"
                  href="#"
                >
                  About Me<span className="sr-only">(current)</span>
                </a>
              </Link>
              <Link to="projects" spy={true} auto={true}>
                <a className="nav-item nav-link" href="#">
                  Projects
                </a>
              </Link>
              <Link to="contact" spy={true} auto={true}>
                <a className="nav-item nav-link" href="#">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>

        <div className="body">
          {/* <div className="cube">
            <div claassName="cube" ref={(ref) => (this.mount = ref)} />
          </div> */}
          <h2 className="greet">
            <section>
              Hi, I'm Jon : ) <br />I build things.
              {/* CSS Animation TypeWriterEFFECT */}
              <br />
            </section>
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
        </div>

        <div id="quote">
          <h3>"{this.state.content}"</h3>
          <h3 className="font-italic">
            {this.state.hyphen}
            {this.state.author}
          </h3>
        </div>

        <div id="about">
          <h4>About Me</h4>
          <p className="about">
            I'm a freelance web developer and programmer based out of
            Gainesville, FL, USA. Be it my own or collaborative, I make
            non-tangable concepts a reality. Using my creative gears, I love
            building, modifying and assembling projects of all kinds...whether
            it's music, art or technology.
          </p>{" "}
          <br />
          <p className="about">
            Contact me so we can discuss your ideas and make your digital dreams
            come to life!
          </p>
          <br />
        </div>
        <h4>My Tech Toolbox</h4>
        <section id="tools">
          <ul>
            <li className="tool">HTML5</li>
            <li className="tool">CSS3</li>
            <li className="tool">JS</li>
            <li className="tool">ReactJS</li>
            <li className="tool">Git</li>
            <li className="tool">Bootstrap</li>
            <li className="tool">jQuery</li>
            <li className="tool">Express</li>
            <li className="tool">NPM</li>
          </ul>
        </section>
        <section id="projects">
          <h4>Projects</h4>
          <div className="p1">Project 1</div>
          <div className="p1">Project 2</div>
          <div className="p1">Project 3</div>
          <div className="p1">Project 4</div>
        </section>
        <section id="contact">
          <h4>Contact</h4>
          <p>
            email:
            <a href="mailto:jonjosephson1@gmail.com">
              {" "}
              jonjosephson1@gmail.com
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
