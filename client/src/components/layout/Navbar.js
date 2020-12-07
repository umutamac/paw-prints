import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css"


class Navbar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar">
        <nav className="z-depth-0">
            <div className="top-bar nav-wrapper">
                <div className="top-bar-title">

                <p id="ppaw ppawc">
   
   <em className="title">Paw</em>
   <em className="planet left">🐾</em>
   
   <em className="title">prints</em>
   
 </p>


                </div>
                <div className="top-bar-right">
                    <ul className="menu menu-hover-lines">
                        <li><img
                                className="image"
                                src="https://i.imgur.com/X8M0KiK.png"
                                alt="paw prints" /></li>
                        <li><Link to="/register">
                          <a href="#">Sign Up</a>
                            </Link>
                        </li>
                        <li><Link to="/login">
                          <a href="#">Sign In</a>
                            </Link>
                        </li>
                        <li><img
                                className="image"
                                src="https://i.imgur.com/X8M0KiK.png"
                                alt="paw prints" /></li>
                    </ul>
                </div>
            </div>
            </nav>
          </div>
    );
  }
}
export default Navbar;
