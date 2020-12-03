import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link to="/" style={{ fontFamily: "monospace" }}
              className="col s5 brand-logo center black-text" >
              <i className="material-icons">code</i>
              PAW-PRINTS
            </Link>

            {/*
            <div>
        <h1>Navbar Paw - Prints</h1>
        <Link to="/" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} >
          Log in
        </Link>



        <Link to="/signup" className={window.location.pathname === "/signup" || window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Sign up
        </Link>

      </div>
            
            */}
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;