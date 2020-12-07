import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css"

import GetAllPosts from "./GetAllPosts";

class Landing extends Component {
  render() {
    return (
      <div className="background">
        <div className="col s12 center-align">
                <h1 id="title">
                  PawPrints
                </h1>
                <h4 className="nerko">
                  Find Your Lost Pets Here
                </h4>
                </div>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
            
              <div className="col s12 center-align">
                
                <br />
                <div className="col s6">
                  <button type="submit" class="radius success button large">
                    <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px", color: "black" }}
                      className="" >
                      Register
                    </Link>
                  </button>
                </div>

                <div className="col s6">
                  <button type="submit" class="radius success button large">
                                
                  
                    <Link to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px", color: "black" }}
                      className="" >
                      Log In
                    </Link>
                  </button>
                </div>
              </div>
            </div>
        </div>
        <div className="hero-section noBackground">
                <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="medium-12 cell">
                  <GetAllPosts /> 
                  {/* Landing Page will include all posts for everyone to see*/}
                </div>
                </div>
                </div>
        </div>
      </div>
    );
  }
}

export default Landing;