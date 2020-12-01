import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import UploadPost from "./pages/UploadPost";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Landing} /> {/*For users not logged in */}
          <Route exact path="/home" component={HomePage} /> {/*For logged in users */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upload" component={UploadPost} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
