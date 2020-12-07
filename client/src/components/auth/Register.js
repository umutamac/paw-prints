import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "../layout/footer.css";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col s8 offset-s2 nerko">
              <h1 id="title">PawPrints</h1>
              <h3 className="nerko">Helping You Find Your Lost Companion</h3>
              <hr/>
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4 className="nerko">
                  <b>Register</b> below
              </h4>
                <p className="grey-text text-darken-1 nerko">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="grid-container">
                  <div className="grid-x grid-padding-x">
                    <div className="medium-3 cell"></div>
                    <div className="medium-6 cell">
                      <label htmlFor="name">Name</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        className={classnames("", { invalid: errors.name })}
                      />
                      
                      <span className="red-text">{errors.name}</span>
                    </div>
                    <div className="medium-3 cell"></div>
                    <div className="medium-3 cell"></div>
                    <div className="medium-6 cell">
                    <label htmlFor="email">Email</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", { invalid: errors.email })}
                      />
                      
                      <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="medium-3 cell"></div>
                    <div className="medium-3 cell"></div>
                    <div className="medium-6 cell">
                      <label htmlFor="password">Password
                        <input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          className={classnames("", { invalid: errors.password })}
                        />
                      </label>
                      <span className="red-text">{errors.password}</span>
                    </div>
                    <div className="medium-3 cell"></div>
                    <div className="medium-3 cell"></div>
                    <div className="medium-6 cell">
                      <label htmlFor="password2">Confirm Password
                      <input
                        onChange={this.onChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        className={classnames("", { invalid: errors.password2 })}
                      />
                      </label>
                      <span className="red-text">{errors.password2}</span>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                      <div class="medium-6 cell">
                            <button type="submit" class="radius success button large" id="signUpButton">
                              Sign Up
                            </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));