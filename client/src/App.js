  
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
//import Navbar from "./components/Navbar";
//import Login2 from "./pages/Login";
//import Signup from "./pages/Signup";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar />
<<<<<<< HEAD
        
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
          
        <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>

=======

        <Switch>
          <Route exact path="/" component={Landing} /> {/*For users not logged in */}
          <Route exact path="/home" component={HomePage} /> {/*For logged in users */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upload" component={UploadPost} />
        </Switch>
        
>>>>>>> 0eccf63af3227cda39e60f92f9c19d3c68d5a462
      </div>
    </Router>
    </Provider>
  );
}
}

export default App;

//<Route exact path="/" component={Login2} />  
//<Route exact path="/signup" component={Signup} />