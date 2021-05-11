import "./App.css";

function App() {
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
          Hello.
          <br /> I'm Jon.
          <br /> I like to build things...
          <br /> Web Pages. Apps. Relationships.
        </p>
      </div>
    </div>
  );
}

export default App;
