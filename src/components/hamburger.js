import React, { Component } from "react";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  render() {
    return (
      <div>
        <div id="menu-toggle" className="clickone">
          <div id="hamburger" className="clickone">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Hamburger;
