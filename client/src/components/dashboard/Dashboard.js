import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import "../layout/footer.css"

import GetAllPosts from "../layout/GetAllPosts";

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    //console.log(user)
    return (
      <div className="background">
          <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 cell center-align">
              <h1 id="title">PawPrints</h1>
    
              <h3 className="nerko">Helping You Find Your Lost Companion</h3>
              <hr/>
                <h4 className="nerko">
                  <b className="nerko">Hey there,</b> {user.name.split(" ")[0]}
                  <p className="flow-text grey-text text-darken-1">
                    
                  </p>
                  <button className="radius success button large">
                    <Link to="/upload" style={{ color: "black"}}>Create a post</Link>
                  </button>
                </h4>
                <button type="submit" onClick={this.onLogoutClick} class="radius success button large" id="signUpButton">
                              Logout
                </button>

              </div>

            </div>
          </div>
          <div className="hero-section noBackground">
                <div className="col s12 center-align">
                  <GetAllPosts /> 
                  {/* 
                    The home page for loggen in people will include this page.
                    After creating a post, people will be redirected here
                  */}
                </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);